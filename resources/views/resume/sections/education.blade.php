<div class="col-md-12" style="float:left">
	@if($items)
		@foreach($items as $item)
		<div class="row">
			<div class="col-sm-6">
				<h5 class="font-weight-bold">{{$item['degree']??''}}</h5>
				<div>{{'Education Type: '.$item['edu_type']??''}}</div> 
				<div>{{'Institution: '.$item['institution']??''}}</div> 
				<div>{{'Address: '.$item['city']??''}} {{$item['state']??''}} {{$item['post_code']??''}} {{$item['country']??''}}</div> 
				<div>
					@if(!empty($item['start_month']) && !empty($item['start_year']))
					Start Date : {{$item['start_month']}} {{$item['start_year']}}
					@endif
					@if(!empty($item['still_enrolled']) && $item['still_enrolled'] == 1)
						Expected Completed Date : {{$item['expected_completion_month']}} {{$item['expected_completion_year']}}
					@endif
				</div> 
			</div>
		</div>
		@endforeach
	@endif
</div>