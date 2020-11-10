<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Exception;

class Gdal2Mbtiles extends Command
{
      /**
     * The docker command .
     *
     * @var string
     */
    protected $gdal2mbtiles;
    protected $gdal;
    protected $tippecanoe;
    protected $geostyler;
    protected $storage_path;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    
    protected $signature = 'my_app:gdal2mbtiles
                            {name : Name for tileset, has to bee unique for example and ID}
                            {from : Path of GDAL OGR compatible File}
                            {type : raster|vector}
                            {png : 8|24|256}
                            {style? : Path of QML|SLD}
                            ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Convert GDAL redable files with gdal2mbtiles container';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        //COMMANDS
        
        $this->storage_path = config("obs.TILESERVER_STORAGE_PATH");
        
        $this->gdal2mbtiles = 'docker run --rm --name gdal2mbtiles -v "'.$this->storage_path .'":/data joeakeem/gdal2mbtiles ';
        $this->tippecanoe =   'docker run --rm --name tippecanoe -v "'.$this->storage_path .'":/data klokantech/tippecanoe:latest ';
        $this->gdal =         'docker run --rm --name gdal -v "'.$this->storage_path .'":/data osgeo/gdal:ubuntu-full-latest ';
        $this->geostyler =    'docker run --rm --name geostyler  -v "'.$this->storage_path .'":/data lcrojano/geostyler ';

        exec("docker stop gdal2mbtiles");
        exec("docker stop tippecanoe");

        $this->info('---> Starting Convertion');
        $name = $this->argument('name');
        $from = $this->argument('from');
        $type = $this->argument('type');
        $format = $this->argument('png');
        $style = $this->argument('style')? $this->argument('style'): null;
        $mbstyle_file = null;
        $no_error = true;
        try {
            $this->info('1. Begin Convertion \n');
            switch ($type) {
                case 'raster':
                    //1. gdalwarp convert_raster a EPGS: 3857  y comprimir. 
                    $this->info('1.1 Convert Raster to mbtiles \n');
                    $no_error =     $this->convert_raster($name, $from, $format);
                    break;
                case 'vector':
                    $this->info('1.1 Convert Shape to mbtiles \n');
                    $no_error =  $this->convert_vector($name,  $from, $format);
                    break;
                default:
                    # code...
                    break;
            
            }

            if($style!==null && $no_error){
                //3. Agregar estylos
                $this->info("1.3. PARSE STYLES");
                $mbstyle_file =  $this->parseStyles($style, $name);
                $this->info("   1.3. end parse styles \n \n");
                //5. ADD mbtile and styles to tileserver 
                //5.1 get style file from tileserver
               
                $this->info("4. updating tileserver \n\n");
                $fileName = pathinfo($from, PATHINFO_FILENAME);
                $to = $fileName ."_cmp.mbtiles"; // same as from but change extension
                $style = json_decode(file_get_contents(config('obs.TILESERVER_STYLE_FILE')));
                $style->data->$name =  (object)[
                    "mbtiles" => "{$name}_{$to}"
                ];
                $this->info( json_encode( $style->data));
                file_put_contents(config('obs.TILESERVER_STYLE_FILE'), json_encode( $style,JSON_UNESCAPED_SLASHES));
                //6. restart .        
                $this->info('4. restarting tileserver');
                exec("docker stop tileserver-gl ");
                sleep(5);
                $this->info('docker  run --rm --name tileserver-gl -v "'.config('obs.TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json --public_url https://obsriomagdalena.uninorte.edu.co/tileserver |at now');
                exec('docker  run --rm --name tileserver-gl -v "'.config('obs.TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json --public_url https://obsriomagdalena.uninorte.edu.co/tileserver |at now');
                sleep(5);
                        $this->info('4. restarted');
            }else{
                throw new Exception( "Error: Al convertir La fuente de datos, por favor verificar.") ;

            }
    
         
            
    
        } catch (\Throwable $th) {
            throw $th;
            return $th;   
        }
      


    }


    // helper Commands
    public function convert_raster($name, $from, $format = null)
    {
        ini_set("memory_limit","3G");
        $dir = pathinfo($from, PATHINFO_BASENAME);
        $fileName = pathinfo($from, PATHINFO_FILENAME);
        $to = $fileName ."_cmp.mbtiles"; // same as from but change extension
        $gdalcmd= $this->gdal2mbtiles; 
        $gdalcmd .= "--name {$name} "
        ." --min-resolution 5 "
        ." --max-resolution 15 "
        ." --no-fill-borders "
         ." --verbose "
        // ." --png8  {$format} "     
        ." '/data/{$from}' "
        ." '/data/mbtiles/{$name}_{$to}' ";
        $this->info("Excecuting...: ".$gdalcmd);
       // exec("mkdir ".$this->storage_path."/mbtiles/{$name}", $output_array);
        try {
            set_time_limit ( 2000 );

            //code...
            exec($gdalcmd."  2>&1", $output_array, $error);
        } catch (\Throwable $th) {
            throw $th ;
            return false;   
            //throw $th;
        }
        //Check if mbtiles waas created, else return false
        if(!file_exists($this->storage_path."/mbtiles/{$name}_{$to}")){
            throw new Exception( "Error: {$error} - {$gdalcmd} \n".$this->storage_path."/mbtiles/{$name}_{$to}"." -\n". implode("\n",$output_array)) ;
             return false;   
        }else{
            $this->info(implode("\n", $output_array));
            $this->info(" \n 1.1  End convert RASTER to MBTILE \n");
        }
        return true ;
    }

    public function convert_vector($name, $from, $to)
    {
        ini_set("memory_limit","3G");
        set_time_limit ( 2000 );
        $this->info('  1.1 Convert vector to geojson');
        $dir = pathinfo($from, PATHINFO_BASENAME);
        $to =  $fileName = pathinfo($from, PATHINFO_FILENAME);
        $cmd= $this->gdal; 
        $cmd .= " ogr2ogr  -f GeoJSON "
        ."  '/data/mbtiles/{$name}_{$to}.geojson' " //Out
        ." -t_srs EPSG:4326 "
        ."  '/data/{$from}' "; // In shp|kml|vector
        $this->info("--> Ejecutando: " . $cmd);
        //exec("mkdir ".$this->storage_path."/styles/{$name}", $output_array);
        exec($cmd, $output_array);
        $this->info(implode("\n", $output_array));
        $this->info("  1.1 End convertor to geojson \n\n");
        if(!file_exists($this->storage_path."/mbtiles/{$name}_{$to}.geojson")){
            throw new Exception("2") ;
            return false;   
        }else{
            $this->info(implode("\n", $output_array));
            $this->info(" \n 1.1  End convert RASTER to MBTILE \n");
        }



        $this->info('  1.2. Convert Geojson to mbtiles');
        $cmd = $this->tippecanoe . "tippecanoe "
        ." -zg   -f"
        .' -l data -n "www.obsriomagdalena.uninorte.edu.co | '.$name.'"'
        ." -o '/data/mbtiles/{$name}_{$to}_cmp.mbtiles'"// out //mbtiles
        ." '/data/mbtiles/{$name}_{$to}.geojson'"; // In //json
        $this->info("--> Ejecutando: " . $cmd);
        exec($cmd, $output_array);
        if(!file_exists($this->storage_path."/mbtiles/{$name}_{$to}_cmp.mbtiles")){
            throw new Exception("3") ;
            return false;   
        }else{
            $this->info(implode("\n", $output_array));
            $this->info(" \n 1.1  End convert RASTER to MBTILE \n");
        }
        //TODO: borrar geojson.


        $this->info($cmd."\n".implode("\n", $output_array));
        $this->info(" 1.2 End Geojson to mbtiles \n\n");

        return true ;
    }
    public function parseStyles($style, $name){
// TODO: is not have style create generic
// recordar que el volumen docker esta en /LAYER
         
       // $to =  pathinfo($style, PATHINFO_FILENAME).".json";
         $to =  "style.json";
        $type = pathinfo($style, PATHINFO_EXTENSION);
        //Get Style Extension
        $cmd = $this->geostyler . " cli.js "
        ." -t {$type} "
        ." -c {$name}  "
        .' -i "/data/'.$style.'" '
        .' -o "/data/styles/'.$name."_".$to.'"';
       // exec("mkdir ".$this->storage_path."/styles/{$name}", $output_array);
        exec($cmd, $output_array);

        $this->info($cmd. "\n ".implode("\n", $output_array));
        $this->info("  End parsin tyle \n\n");

    

        if( strpos(implode($output_array),  "geostyler-FATAL ERROR:") === false){
          //  $this->info(' ----begin style symbolic link');
         //   $this->info('mkdir -p  "'.config('obs.TILESERVER_PATH').'/styles/'.$name.'"');  
        //    exec("mkdir -p  '".config('obs.TILESERVER_PATH').'/styles/'.$name.'"');
        //    exec('ln  -sfn "'.config('obs.PLATAFORMA_PATH').'/'.$to.'" "'.config('obs.TILESERVER_PATH').'/styles/'.$name.'/style-local.json"');
            $this->info(' ---end style symlink');  
          
            return  $name."_".$to ;
        }

        return null ;
    }
}
