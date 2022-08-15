<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>SCTI Jobs</title>
    <base href="{{url('/')}}">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="{{asset('assets/user/images/favicon.ico')}}" />
    <link rel="stylesheet" href="{{asset('assets/user/css/bootstrap.min.css')}}" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" />
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="{{asset('assets/user/css/datatables.min.css')}}" type="text/css" />
    <link rel="stylesheet" href="{{asset('assets/user/css/style.css')}}" />
    <link rel="stylesheet" href="{{asset('assets/user/css/animate.css')}}" />
    <link rel="stylesheet" href="{{asset('assets/user/css/intlTelInput.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
    <script>
        window.base_url = '{{url('/')}}';

    </script>
</head>
<body>
    <div id="app">
    </div>
</body>

<script src="{{ url(mix('/js/app.js')) }}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="{{asset('assets/user/js/wow.min.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.full.min.js"></script>
<script src="{{asset('assets/user/js/datatable-basic.js')}}"></script>
<script src="{{asset('assets/user/js/datatables.min.js')}}"></script>
<script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
<script src="{{asset('assets/user/js/intlTelInput.js')}}"></script>
<script src="{{asset('assets/user/js/utils.js')}}"></script>
<script src="{{asset('assets/user/js/function.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="{{asset('assets/user/js/custom.js')}}"></script>
<script uid="{{auth()->user()}}" src="https://dev28.onlinetestingserver.com/soachatcentralizedWeb/js/ocs.js"></script>
<script>
    new WOW().init();

</script>
<script>
    $(document).ready(function() {

        let servicesSlider = $(".services-carousel");

        servicesSlider.owlCarousel({
            autoplay: true,
            autoplay: 5000,
            autoplaySpeed: 2000,
            autoplayHoverPause:true,

            loop: true,
            nav: false,

            dots: false,
            margin: 15,
            slideBy: 1,
            center: false,
            stagePadding: 5,
            navText: [
                '<i class="far fa-chevron-left"></i>',
                '<i class="far fa-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: false,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    
        var mm = jQuery('#testi').owlCarousel({
            loop: true
            , margin: 20
            , autoplay: true
            , autoplayTimeout: 3000
            , autoplaySpeed: 2000
            , responsiveClass: true
            , dots: false
            , nav: true
            , responsive: {
                0: {
                    items: 1
                }
                , 992: {
                    items: 2
                }
                , 1050: {
                    items: 4
                }
            }
        });

    });

</script>
<script>
    $('.headr-dropdown').click(function(e) {
        $(this).next().slideToggle('slow');
    });
    $('.job-box-usr a').click(function(e) {
        $(this).next().slideToggle('slow');
    });

</script>

</html>
