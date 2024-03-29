<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Observatorio del Río Magdalena</title>

    <base href="/plataforma/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles.73ce1fad7870e3cd0a76.css"></head>

<body>
    <ngx-app>Cargando...</ngx-app>

    <style>
        @-webkit-keyframes spin {
            0% {
                transform: rotate(0)
            }
            100% {
                transform: rotate(360deg)
            }
        }
        
        @-moz-keyframes spin {
            0% {
                -moz-transform: rotate(0)
            }
            100% {
                -moz-transform: rotate(360deg)
            }
        }
        
        @keyframes spin {
            0% {
                transform: rotate(0)
            }
            100% {
                transform: rotate(360deg)
            }
        }
        
        .spinner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1003;
            background: rgb(247, 252, 253);
            background: linear-gradient(322deg, rgba(192, 235, 243, 1) 0%, rgba(247, 254, 255, 1) 37%, rgba(255, 255, 255, 1) 100%);
            overflow: hidden
        }
        
        .spinner div:first-child {
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
            border-radius: 50%;
            box-shadow: 0 3px 3px 0 rgb(45, 75, 77);
            transform: translate3d(0, 0, 0);
            animation: spin 1s linear infinite
        }
        
        .spinner div:first-child:after,
        .spinner div:first-child:before {
            content: '';
            position: absolute;
            border-radius: 50%
        }
        
        .spinner div:first-child:before {
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            box-shadow: 0 3px 3px 0 rgb(111, 186, 211);
            -webkit-animation: spin 3s linear infinite;
            animation: spin 2s linear infinite
        }
        
        .spinner div:first-child:after {
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            box-shadow: 0 3px 3px 0 rgb(79, 190, 117);
            animation: spin 1.5s linear infinite
        }
        
        .spinner div:first-child img {
            width: 50px;
            position: absolute;
            margin: 0 auto;
            bottom: 50px;
            left: 50px;
        }
    </style>
    <div id="nb-global-spinner" class="spinner">
        <div class="blob blob-0">
            <img style="" src="./favicon.png" alt="Logo Observatorio">
        </div>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
        <div class="blob blob-5"></div>
    </div>

<script src="runtime.badb32a972989758b8dd.js" defer></script><script src="polyfills-es5.767cd6ec32eacede366c.js" nomodule defer></script><script src="polyfills.7fc2c482a70f99b63919.js" defer></script><script src="scripts.5f9a76c1e1fbcd6240ee.js" defer></script><script src="main.d15e027c65760ceb4298.js" defer></script></body>

</html>