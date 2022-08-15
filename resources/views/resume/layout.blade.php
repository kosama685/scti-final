<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">

        <title>Resume</title>
        <style type="text/css">
             
            body{
                height: 100%;
                width: 100%;
                font-size : 14px;
            }
        </style>
        {{-- <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1/css/bootstrap.min.css"> --}}

        @stack('app_header')
    </head>
    <body >
        <div id="app">
            <div id="page" class="site-main">
                @yield('content')
                {{-- @yield('app_content') --}}
            </div>
        </div>

        @stack('app_footer')

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>