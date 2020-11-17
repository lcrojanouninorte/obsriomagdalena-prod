<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Observatorio del Río Magdalena</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /** 
                Set the margins of the page to 0, so the footer and the header
                can be of the full height and width !
             **/
             .keep-together {
                page-break-inside: avoid;
            }
            
            .break-before {
                page-break-before: always;
            }
            
            .break-after {
                page-break-after: always;
            }
        @page {
            margin: 0cm 0cm;
        }
        /** Define now the real margins of every page in the PDF **/
        
        body {
            margin-top: 2cm;
            margin-left: 2cm;
            margin-right: 2cm;
            margin-bottom: 2cm;
            text-align: center;
        }
        /** Define the header rules **/
        
        header {
            position: fixed;
            top: 0cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
            /** Extra personal styles **/
            background-color: #6DB9D0;
            color: white;
            text-align: center;
            line-height: 1.5cm;
            width: 100vw;
        }
        /** Define the footer rules **/
        
        footer {
            position: fixed;
            bottom: 0cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
            /** Extra personal styles **/
            background-color: #6DB9D0;
            color: white;
            text-align: center;
            line-height: 1.5cm;
        }
    </style>
</head>

<body >
    <!-- Define header and footer blocks before your content -->
    <header style="vh=10;">
        <div class="d-flex justify-content-between mb-5">
            <img class=" d-flex mt-2 ml-5 " src="{{asset('/assets/img/logo.jpg')}}" width="150" alt="OBS">
            <img class="d-flex mt-1 mr-5 " src="{{asset('/assets/img/LogoUninorte.png')}}" width="150" alt="uninorte">
        </div>
    </header>


    <main style="vh=80;" class="container mt-5 d-flex flex-column justify-content-center">
        <div class="d-flex flex-column justify-content-center">
            <h2 class="text-center align-self-center mb-2">Reporte de Estación {{$station->name}}</h2>
            <h6 class="text-center align-self-center mb-4">Fecha del reporte:
                <?php echo date("Y-m-d, H:m:s A");?>
            </h6>
        </div>
        <div style=" margin:0 auto;  "  class=" d-flex justify-content-center mb-5 ">
                    <div  >

                        <div style="width:200px;float:left;" class="d-flex  ">
                            <img src="https://obsriomagdalena.uninorte.edu.co/tileserver/styles/colombia-style/static/{{$station->longitude}},{{$station->latitude}},12/150x150@2x.png" width="150" alt="ubicación">
                        </div>

                        <div   class="d-flex  p-2">
                            <div class="d-flex">
                                <img class=" align-self-center " src="{{ $station->icon }}" alt="Icono de estación" width="30" height="30">
                            </div>
                            <div><b>Nombre: {{ $station->name }}</b></div>
                            <div><b>Lat: {{ $station->latitude }}</b></div>
                            <div><b>Lon: {{ $station->longitude }}</b></div>
                        </div>
                    </div>
             
        </div>
 
   

            <div class="d-flex justify-content-center flex-column mt-3" >
                @foreach($station->imgFiles ?? '' as $img)
                <div   class="d-flex justify-content-center  flex-column image shadow-sm mb-4 " >
                    <div class=" d-flex flex-column justify-content-center">
                        <h2 class="h5 mb-2 text-left">{{$img->title}}</h2>
                        <img  class="align-self-center mx-auto" src="{{$img->file_path}}" alt="Grafico" width="75%" height="auto">
                    </div>
                    <div class="desc">
                        <p class="paragraph p-3 m-2">
                            {{$img->desc}}
                        </p>
                    </div>
                </div>
                @endforeach
            </div>

 

    </main>
    <!--<footer style="vh=10;">
        Observatorio del Río Magdalena - Universidad del Norte Copyright &copy;
        <?php echo date("Y");?>
    </footer>
      <script src="{{ asset('js/app.js') }}" type="text/js"></script>-->
</body>

</html>