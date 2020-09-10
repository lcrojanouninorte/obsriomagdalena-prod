<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Exception;
class ImageOptimize extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'my_app:optimize_img
                            {size : box to risize e.g.: 5000x5000}
                            {quality : size quality e.g.: 90}
                            {from : Image to rezise}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Optimize Image For Mapbox WebGl(max size of 4026)';

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
        try {
            //code...
            $this->info('begin optimization');
            $size = $this->argument('size');
            $quality = $this->argument('quality');
            $from = $this->argument('from');
            $this->info($this->convert($from, $size, $quality));
            exec($this->convert($from, $size,$quality));
            $this->info('end optimization');
        } catch (\Exception $e) {
            $this->error($e->getMessage());

			print "Check Error";
        }

    }

    public function convert($from, $size, $quality)
    {
        $command = 'magick convert "'
            . $from
            .'" '
            . '-resize '.$size
            .'\> '
            . '-sampling-factor 4:2:0 -strip -quality '.$quality
            .' "'
            . $from.'"';
        return $command;
    }
}
