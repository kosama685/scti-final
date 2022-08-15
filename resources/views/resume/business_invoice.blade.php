<!DOCTYPE html>
<html>
<head>
    <title>Invoice</title>
</head>
<body>
    <div class="row offset-lg-1 align-items-center">

            <div class="col-md-4">
                <h3 for="">Subscription Date</h3>
                <span for="">{{ $invoice_view->created_at->format('m/d/Y') }}</span>
            </div>

            <div class="col-md-4">
                <h3 for="">Package Type</h3>
                <label for="">{{ $invoice_view->packages->package_name }}</label>
            </div>

            <div class="col-md-4">
                <h3 for="">Last Renewal Date</h3>
                <label for="">{{ $invoice_view->expiry_date }}</label>
            </div>

                <div class="col-md-4">
                <h3 for="">Expire Date</h3>
                <label for="">{{ $invoice_view->expiry_date }}</label>
            </div>

            <div class="col-md-4">
                <h3 for="">Charges</h3>
                <label for="">{{ $invoice_view->charges }}</label>
            </div>

            <div class="col-md-4">
                <h3 for="">Status</h3>
                <label for="">{{ ($invoice_view->user->status == 1) ? 'Active' : 'Inactive'}}</label>
            </div>


    </div>
</body>
</html>