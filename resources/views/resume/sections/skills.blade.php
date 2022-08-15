<div class="col-md-12">
	@foreach($items['education'] as $item)
		<div style="margin-top: 10px">
			<span style="color: #000;font-weight: bold">{{$item->degree}}</span> 
			<span style="color: #000;font-weight: bold">({{$item->institute_name}})</span>
		</div>
	@endforeach
</div>
