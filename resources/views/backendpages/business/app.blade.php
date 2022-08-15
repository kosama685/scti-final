<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>SCTI JOBS</title>
    <base href="{{url('/')}}">
    <link rel="shortcut icon" href="{{url('assets/images/favicon.ico')}}" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap" rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
	<!-- BEGIN VENDOR CSS-->
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/app-assets/css/vendors.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/app-assets/vendors/css/forms/selects/select2.min.css')}}">
	<!-- END VENDOR CSS-->
	<!-- BEGIN STACK CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/app-assets/css/app.css')}}">
	<!-- END STACK CSS-->
	<!-- BEGIN Page Level CSS-->
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/app-assets/css/core/menu/menu-types/vertical-menu.css')}}">
	<!-- END Page Level CSS-->
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/app-assets/css/plugins/calendars/fullcalendar.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/app-assets/vendors/css/calendars/fullcalendar.min.css')}}">
	<!-- BEGIN Custom CSS-->
	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/assets/css/style.css')}}">
    @if (Request::is('business/login') || Request::is('business/register'))
    <link rel="stylesheet" type="text/css" href="{{url('assets/assets/css/login.css')}}">
    @endif
	<link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="{{asset('/assets/business/assets/css/circle.css')}}">
{{--	<link rel="stylesheet" type="text/css" href="{{asset('/assets/business/assets/vendors/css/tables/datatable/datatables.min.css')}}">--}}
{{--    <script>--}}
{{--               window.Laravel = {!!json_encode([--}}
{{--                   'isLoggedin' => true,--}}
{{--                   'user' => null,--}}
{{--                   'as' => 'public',--}}
{{--               ])!!}--}}
{{--            </script>--}}
    <script>
        window.base_url = '{{url('/')}}';
    </script>
</head>
<body class="vertical-layout vertical-menu 2-columns menu-expanded fixed-navbar" data-open="click" data-menu="vertical-menu" data-col="2-columns">
    <div id="app">
    </div>
</body>
<script src="{{ url(mix('/js/app.js')) }}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- BEGIN VENDOR JS-->

<script src="{{asset('/assets/business/app-assets/vendors/js/vendors.min.js')}}" type="text/javascript"></script>
<script src="{{asset('/assets/business/app-assets/vendors/js/forms/select/select2.full.min.js')}}" type="text/javascript"></script>
<script src="{{asset('/assets/business/app-assets/js/scripts/forms/select/form-select2.js')}}" type="text/javascript"></script>
{{--<script src="{{asset('/assets/business/app-assets/vendors/js/tables/datatable/datatables.min.js')}}" type="text/javascript"></script>--}}
{{--<script src="{{asset('/assets/business/app-assets/js/scripts/tables/datatables/datatable-basic.js')}}" type="text/javascript"></script>--}}
{{--<script src="{{asset('/assets/business/app-assets/vendors/js/charts/chart.min.js')}}" type="text/javascript"></script>--}}
{{--<script src="{{asset('/assets/business/app-assets/vendors/js/charts/echarts/echarts.js')}}" type="text/javascript"></script>--}}
<script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
{{--<script src="{{asset('/assets/business/app-assets/js/scripts/charts/echarts/bar-column/basic-column.js')}}" type="text/javascript"></script>--}}
{{--<script src="{{asset('/assets/business/app-assets/js/scripts/charts/echarts/pie-doughnut/basic-pie.js')}}" type="text/javascript"></script>--}}
{{--<script src="{{asset('/assets/business/assets/js/chart.js')}}" type="text/javascript"></script>--}}
<script src="{{asset('/assets/business/assets/js/jquery.mCustomScrollbar.concat.min.js')}}"></script>
<script src="{{asset('/assets/business/app-assets/vendors/js/extensions/moment.min.js')}}" type="text/javascript"></script>
<script src="{{asset('/assets/business/app-assets/js/core/app-menu.js')}}" type="text/javascript"></script>
<script src="{{asset('/assets/business/app-assets/js/core/app.js')}}" type="text/javascript"></script>
{{--<script src="{{asset('/assets/business/app-assets/js/scripts/customizer.js')}}" type="text/javascript"></script>--}}
<script src="{{asset('/assets/business/app-assets/js/scripts/modal/components-modal.js')}}" type="text/javascript"></script>
{{--<script src="{{asset('/assets/business/assets/js/function.js')}}" type="text/javascript"></script>--}}
{{--<script src="{{asset('/assets/business/assets/js/dash-chart.js')}}"></script>--}}

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
{{--<script src="{{asset('assets/business/js/datatable-basic.js')}}"></script>--}}
{{--<script src="{{asset('assets/business/js/datatables.min.js')}}"></script>--}}
<script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
{{--<script src="{{asset('assets/business/js/intlTelInput.js')}}"></script>--}}
{{--<script src="{{asset('assets/business/js/utils.js')}}"></script>--}}
<script src="{{asset('assets/business/js/custom.js')}}"></script>
<script uid="{{auth()->user()}}" src="https://dev28.onlinetestingserver.com/soachatcentralizedWeb/js/ocs.js"></script>
{{--<script>--}}
{{--    $(document).on('click','.next',function(){--}}
{{--        alert(2);--}}
{{--    })--}}
{{--</script>--}}
</html>
