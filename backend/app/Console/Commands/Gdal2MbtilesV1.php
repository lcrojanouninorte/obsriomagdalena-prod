<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Gdal2MbtilesV1 extends Command
{
    //$(pwd):/home will belaravel root path
    protected $gdal = 'docker run --rm --name gdal -v "c:/_Current Proyects/Plataforma ORMA 2020/backend/public/assets/files/shares/plataforma/LAYERS":/home osgeo/gdal:alpine-small-latest ';
    #$gdal = 'docker run --rm --name gdal -v $(pwd):/home osgeo/gdal:alpine-small-latest'
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'my_app:gdal-v1
                            {from : Path or file}
                            {format : PNG8|PNG|JPEG}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Convert file to mbtiles using GDAL';

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
        //
        try {
            //code...
            exec("docker stop gdal");

            $this->info('begin gdal2mbtiles convertion');
            $from = $this->argument('from');
            $format = $this->argument('format');


            //1. gdalwarp convertir a EPGS: 3857  y comprimir. 
            $this->info('1. begin compress');
            $to = explode(".", $from);
            $to = $to[0]."_cmp.".$to[1];
            $this->info($this->compress($from, $to));
            exec($this->compress($from, $to), $output_array);
            $this->info(implode("\n", $output_array));
          
            $this->info(' end compress');

            //2. Convert to MBtiles
            $this->info('2. Convert to MBtiles');
            $from = $to;
            $to =  explode(".", $from)[0].".mbtiles";
            $this->info($this->convert($from,$to, $format));
            exec($this->convert($from,$to, $format), $output_array);
            $this->info(implode("\n", $output_array));
            $this->info(' End Convert to MBtiles');

            //3. Down Scale
            $this->info('3. DownScale');
            $this->info($this->downscale($to, $format));
            exec($this->downscale($to, $format),  $output_array);
            $this->info(implode("\n", $output_array));
            $this->info(' End Convert to MBtiles');

            //4. Move mbtile to tileserver-gl/mbtiles

            //5. Add tile to style

            //6. restart tileserver.

            //7. remove unused files




        } catch (\Exception $e) {
            $this->error($e->getMessage());

			print "Check Error";
        }

    }

    // Called Commands
    public function compress($from, $to)
    {
       
        $gdalwarp = $this->gdal; 
        $gdalwarp .= "gdalwarp -r near -t_srs EPSG:3857" //convert to pseudo reference
      .' -co "TILED=YES" '
      ." -co compress=deflate "
      ." -wo NUM_THREADS=ALL_CPUS -multi " //use all cpu
      ." --config GDAL_CACHEMAX 512 " //Compressión
      ." /home/".$from 
      ." /home/".$to   
      ." -overwrite";        
        return $gdalwarp;
    }

    public function convert($from, $to, $format)
    {

        $gdaltransform = $this->gdal; 
        $gdaltransform .= "gdal_translate -of mbtiles -r nearest  "
        .' -oo NUM_THREADS=ALL_CPUS'
        .' -co "ZLEVEL=4" '
        .' -co "TILE_FORMAT='. $format.'"'
        .' -outsize 0 80%'
        .' --config GDAL_CACHEMAX 512 '
        .' --config GDAL_NUM_THREADS ALL_CPUS '
        ." /home/".$from 
        ." /home/".$to;
        return $gdaltransform;
    }

    public function downscale($to,$format)
    {
        $gdaladdo = $this->gdal; 
        $gdaladdo .= 'gdaladdo -r nearest '
        .' -oo "TILE_FORMAT='. $format.'"'
        .' -oo "ZLEVEL=4" '
        .' --config GDAL_CACHEMAX 512 '
        .' --config GDAL_TIFF_OVR_BLOCKSIZE 256'
        .' --config GDAL_NUM_THREADS ALL_CPUS '
        ." /home/".$to;
        return $gdaladdo;
    }
}
