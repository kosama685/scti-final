@extends('resume.layout')
@push('app_header')
@endpush
@section('app_content')

<div>
	<div class="sidebar row" style="display: flex;flex-direction: column;">
	    <div class="col-md-3" style="position: absolute;top: 10px;left: 300px">
	    	<div class="row header">
    						
	    	</div>
	    </div>
	    <div class="col-md-3" style="position: absolute;top: 240px;left: 300px">
	    	<div class="row header">
    			<h1 class="section-heading text-center" style="color: black;font-weight: bold">Work Experience</h1>
    			@include('resume.sections.work_experience', ['items' => $data??[]])	
	    	</div>
	    </div>
	    {{-- sidebar --}}
		<div class="col-md-3" style="position: absolute;top: 10px">
	    	<div class="row skills">
    			<h2 class="section-heading text-center">Contact Info</h2>
    			@include('resume.sections.contact_info', ['items' => $data['user']])	
	    	</div>
	    </div>
	    <div class="col-md-3" style="position: absolute;top: 280px">
	    	<div class="row skills">
    			<h2 class="section-heading text-center">Skill</h2>
    			@include('resume.sections.skills', ['items' => $data??[] ])	
	    	</div>
	    </div>
	</div>
</div>
@endsection

@section('content')
<div>
	<div class="sidebar row" style="display: flex;flex-direction: column;">
	    <div class="col-md-3" style="position: absolute;top: 10px;left: 300px">
	    	<div class="row header">
    						
	    	</div>
	    </div>
	    <div class="col-md-3" style="position: absolute;top: 240px;left: 300px">
	    	<div class="row header">
    			<h1 class="section-heading text-center" style="color: black;font-weight: bold">Work Experience</h1>
    			@include('resume.sections.work_experience', ['items' => $data??[]])	
	    	</div>
	    </div>
	    {{-- sidebar --}}
		<div class="col-md-3" style="position: absolute;top: 10px">
	    	<div class="row skills">
    			<h2 class="section-heading text-center">Contact Info</h2>
    			@include('resume.sections.contact_info', ['items' => $data['user']])	
	    	</div>
	    </div>
	    <div class="col-md-3" style="position: absolute;top: 280px">
	    	<div class="row skills">
    			<h2 class="section-heading text-center">Education</h2>
    			@include('resume.sections.skills', ['items' => $data??[] ])	
	    	</div>
	    </div>
	</div>
</div>
{{-- <div class="row" style="min-height: 1035px;">
	<div class="col-sm-4 col-md-4 pl-4 pt-4">
		<h4 class="" style="color: black;font-weight: bold">Contact Info</h4>
		<div class="body">	
		</div>
		<div class="pt-4 skills">
			<h4 style="color: #fff;font-weight: bold">Skills</h4>		
    	</div>
	</div>
	<div class="col-sm-8 col-md-8 col-xs-8 pl-4 pt-4">
		<div class="section">
		</div>
		<div class="section">
    	<h4 class="section-heading" style="color: black;font-weight: bold">Educations</h4>		
    	</div>
    	<div class="section">
    	<h4 class="section-heading" style="color: black;font-weight: bold">Experience</h4>	
    	</div>
	</div>
</div> --}}
@endsection