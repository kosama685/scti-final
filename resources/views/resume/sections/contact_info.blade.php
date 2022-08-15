	<div>
	<div >
		<div style="font-weight: bold">Email:</div> 
		<span style="font-weight: bold">{{$items->email ?? '-'}}</span> 
	</div>
	<div style="margin-top: 10px">
		<div style="font-weight: bold">Phone</div> 
		<span style="font-weight: bold">{{$items->phone??'-'}}</span> 
	</div>
	<div style="margin-top: 10px">
		<div style="font-weight: bold">Address</div> 
		<div style="font-weight: bold">{{$items->address??'-'}} </div> 
		<div style="font-weight: bold" >{{$items->city??'-'}}, {{$items->state??'-'}},{{$items->zip_code??'-'}}</div>
		<div style="font-weight: bold">{{$items->country??'-'}}</div> 
	</div>

</div>