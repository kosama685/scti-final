<div class="col-md-12">
		
	<div class="row">
	@foreach($items['experience'] as $item)
		<div class="col-sm-6">
			<h5 class="font-weight-bold">{{$item->job_title}}</h5>
			<div>{{$item->description??''}}</div>
			<div>{{'Employer Name: '.$items->user->first_name??''}}</div> 
			<div>{{'Industry: '.$item['industry']??''}}</div> 
			<div>{{'Address: '.$items->user->address??''}}</div> 
			<div>
				@if(!empty($item->start_date))
				Start Date : {{$item->start_date}} 
				@endif
				@if(!empty($item->current_working) && $item->current_working == 1)
				&dash;
					currently working
				@elseif(!empty($item->current_working) && $item->current_working == 0)
					End Date : {{$item->end_date}} 
				@endif
			</div> 
		</div>
	@endforeach
	</div>
</div>