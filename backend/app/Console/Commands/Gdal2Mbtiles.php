<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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
        //code...
        $this->gdal2mbtiles = 'docker run --rm --name gdal2mbtiles -v "'.config('obs.DOCKER_PLATAFORMA_PATH').'/":/data joeakeem/gdal2mbtiles ';
        $this->tippecanoe =   'docker run --rm --name tippecanoe -v "'.config('obs.DOCKER_PLATAFORMA_PATH').'/":/data klokantech/tippecanoe:latest ';
        $this->gdal =         'docker run --rm --name gdal -v "'.config('obs.DOCKER_PLATAFORMA_PATH').'/":/data osgeo/gdal:ubuntu-full-latest ';
        $this->geostyler =    'docker run --rm --name geostyler  -v "'.config('obs.DOCKER_PLATAFORMA_PATH').'/":/data lcrojano/geostyler ';

        exec("docker stop gdal2mbtiles");
        exec("docker stop tippecanoe");

      #  exec('docker  run --rm --name tileserver-gl -v "'.config('obs.DOCKER_TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json |at now');
      #  sleep(10);
      #  $this->info('docker  run --rm --name tileserver-gl -v "'.config('obs.DOCKER_TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json');

        $this->info('begin gdal2mbtiles convertion');
        $name = $this->argument('name');
        $from = $this->argument('from');
        $type = $this->argument('type');
        $format = $this->argument('png');
        $style = $this->argument('style');
        $mbstyle_file = null;
        $this->info('1. begin Convert \n');
        switch ($type) {
            case 'raster':
                //1. gdalwarp convert_raster a EPGS: 3857  y comprimir. 
                    $to = explode(".", $from);
                    $to = $to[0]."_cmp.mbtiles"; // same as from but change extension
                    
                    exec($this->convert_raster($name, $from, $to, $format), $output_array);

                    $this->info(implode("\n", $output_array));
                    $this->info(" 1.  End convert RASTER to MBTILE \n ");
                break;
            case 'vector':
                 //1. gdalwarp  a EPGS: 3857  y comprimir.
                    $to = explode(".", $from);
                    $to = $to[0]; 
                   
                    $this->convert_vector($name, $from, $to, $format);
               
                    $this->info("1.  End convert VECTOR to MBTILE \n ");

                    //Parse Styles
                    //3. Agregar estylos
                    $this->info("   1.3. PARSE STYLES");
                    $mbstyle_file =  $this->parseStyles($style, $name);
                    $this->info("   1.3. end parse styles \n \n");

                    $to .=".mbtiles";
                break;
            default:
                # code...
                break;
        }

     

        //4. Create Symlink mbtile to tileserver-gl/mbtiles
        $this->info('3. begin symbolic link');
        exec('ln  -sfn "'.config('obs.DOCKER_PLATAFORMA_PATH').'/'.$to.'" "'.config('obs.DOCKER_TILESERVER_PATH').'/mbtiles"');
        $this->info("3. end symlink \n\n");
 
        //5. ADD mbtile and styles to tileserver 
            //5.1 get style file from tileserver
            $this->info("4. updating tileserver \n\n");
            $file = explode("/", $to);
            $file = end($file);

           
            $style = json_decode(file_get_contents(config('obs.DOCKER_TILESERVER_STYLE_FILE')));
            $style->data->$name =  (object)[
                "mbtiles" => $file
            ];

            //add styles if apply
            if( $mbstyle_file  !== null){
                $style->styles->$name =  (object)[
                    "style"=> $mbstyle_file
                ];
                $this->info(" 4.1 updating styles \n\n");
            }

            $this->info( json_encode( $style->data));
            file_put_contents(config('obs.DOCKER_TILESERVER_STYLE_FILE'), json_encode( $style,JSON_UNESCAPED_SLASHES));
        //6. restart tileserver.        
        $this->info('4. restarting tileserver');
        exec("docker stop tileserver-gl ");
        sleep(5);
        $this->info('docker  run --rm --name tileserver-gl -v "'.config('obs.DOCKER_TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json --public_url https://obsriomagdalena.uninorte.edu.co/tileserver |at now');
        exec('docker  run --rm --name tileserver-gl -v "'.config('obs.DOCKER_TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json --public_url https://obsriomagdalena.uninorte.edu.co/tileserver |at now');
        sleep(5);
                $this->info('4. restarted');



    }


    // helper Commands
    public function convert_raster($name, $from, $to, $format = null)
    {
       
        $gdalcmd= $this->gdal2mbtiles; 
        $gdalcmd .= "--name {$name} "
        ." --min-resolution 7 "
        ." --max-resolution 14 "
        ." --no-fill-borders "
        // ." --verbose "
        // ." --png8  {$format} "     
        ." /data/{$from} "
        ." /data/{$to} ";
        $this->info($gdalcmd);
        return $gdalcmd ;
    }

    public function convert_vector($name, $from, $to)
    {
       
        $this->info('  1.1 Convert vector to geojson');
        $cmd= $this->gdal; 
        $cmd .= " ogr2ogr  -f GeoJSON "
        ."  /data/{$to}.geojson " //Out
        ." -t_srs EPSG:4326 "
        ."  /data/{$from} "; // In shp|kml|vector
        exec($cmd, $output_array);
        $this->info($cmd.implode("\n", $output_array));
        $this->info(implode("\n", $output_array));
        $this->info("  1.1 End convertor to geojson \n\n");


        $this->info('  1.2. Convert Geojson to mbtiles');
        $cmd = $this->tippecanoe . "tippecanoe "
        ." -zg   -f"
        .' -l data -n "www.obsriomagdalena.uninorte.edu.co | '.$name.'"'
        ." -o /data/{$to}.mbtiles"// out //mbtiles
        ." /data/{$to}.geojson"; // In //json
        exec($cmd, $output_array);

        $this->info($cmd.implode("\n", $output_array));
        $this->info(" 1.2 End Geojson to mbtiles \n\n");

        return $cmd ;
    }
    public function parseStyles($style, $name){
// TODO: is not have style create generic

        // recordar que el volumen docker esta en /LAYER
        $path = explode(".",$style);
        $to = $path[0].".json";
        $type = end($path);
        //Get Style Extension
        $cmd = $this->geostyler . " cli.js "
        ." -t {$type} "
        ." -c {$name}  "
        .' -i "/data/'.$style.'" '
        .' -o "/data/'.$to.'"';
        exec($cmd, $output_array);
        
        $this->info($cmd. "\n ".implode("\n", $output_array));
        $this->info("  End parsin tyle \n\n");

    

        if( strpos(implode($output_array),  "geostyler-FATAL ERROR:") === false){
            $this->info(' ----begin style symbolic link');
            $this->info('mkdir -p  "'.config('obs.DOCKER_TILESERVER_PATH').'/styles/'.$name.'"');  
            exec("mkdir -p  '".config('obs.DOCKER_TILESERVER_PATH').'/styles/'.$name.'"');
            exec('ln  -sfn "'.config('obs.DOCKER_PLATAFORMA_PATH').'/'.$to.'" "'.config('obs.DOCKER_TILESERVER_PATH').'/styles/'.$name.'/style-local.json"');
            $this->info(' ---end style symlink');  
          
            return  $name.'/style-local.json' ;
        }

        return null ;
    }
}
