<template>
    <div>
        <register-header></register-header>
        <section class="user-home">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="page-heading">Pay Logs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <ul class="nav nav-tabs pay-logs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="net-tab" data-toggle="tab" href="#net" role="tab"
                                   aria-controls="net" aria-selected="true">Network & Training</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="subs-tab" data-toggle="tab" href="#subs" role="tab"
                                   aria-controls="subs" aria-selected="false">Subscription Logs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body ">

                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="net" role="tabpanel"
                                         aria-labelledby="net-tab">
                                        <div class="row align-items-center">
                                            <div class="col-lg-1 col-md-2 col-12 text-center">
                                                <span class="data-span">Sort By:</span>
                                            </div>
                                            <div class="col-lg-2 col-md-3 col-12">
                                                <div class="form-group">
                                                    <label for="exp">From</label>
                                                    <input type="text" class="form-control reg-input" id="from-date"
                                                           placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-3 col-12">
                                                <div class="form-group">
                                                    <label for="exp">To</label>
                                                    <input type="text" class="form-control reg-input" id="to-date"
                                                           placeholder="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 p-0">
                                                <div class="maain-tabble table-responsive">
                                                    <table class="table zero-configuration">
                                                        <thead>
                                                        <tr>
                                                            <th>S.no</th>
                                                            <th>Program Id</th>
                                                            <th>Program Title</th>
                                                            <th>Booking Date</th>
                                                            <th>Charges</th>
                                                            <th>Status</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>001</td>
                                                            <td>abc title</td>
                                                            <td>May 2, 2020</td>
                                                            <td>$1234</td>
                                                            <td class="green">Paid</td>

                                                        </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade" id="subs" role="tabpanel" aria-labelledby="subs-tab">
                                        <div class="row mb-3 align-items-center">
                                            <div class="col-lg-5 col-md-6 col-12">
                                                <div class="sub_meta_wrap">
                                                    <div class="wrap">
                                                        <p class="top">Package Selected</p>
                                                        <p class="bot">Foundation</p>
                                                    </div>
                                                    <div class="wrap">
                                                        <p class="top">Next Renewal Package</p>
                                                        <p class="bot">Elite</p>
                                                    </div>
                                                </div>
                                                <div class="checkbox_wrap">
                                                    <label class="container-auto">Auto Renew Subscription
                                                        <input type="checkbox">
                                                        <span class="checkmark-auto"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-7 col-md-12 ">
                                                <a href="" class="change-pckg shadow" data-toggle="modal"
                                                   data-target='#change_package'>Change Package for next renewal</a>
                                            </div>
                                        </div>
                                        <div class="row align-items-center">
                                            <div class="col-lg-1 col-md-2 col-12 text-center">
                                                <span class="data-span">Sort By:</span>
                                            </div>
                                            <div class="col-lg-2 col-md-3 col-12">
                                                <div class="form-group">
                                                    <label for="exp">From</label>
                                                    <input type="text" class="form-control reg-input" id="from-date1"
                                                           placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-3 col-12">
                                                <div class="form-group">
                                                    <label for="exp">To</label>
                                                    <input type="text" class="form-control reg-input" id="to-date2"
                                                           placeholder="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 p-0">
                                                <div class="maain-tabble table-responsive">
                                                    <table class="table zero-configuration">
                                                        <thead>
                                                        <tr>
                                                            <th>S.no</th>
                                                            <th>Subscription Date</th>
                                                            <th>Package Type</th>
                                                            <th>Last Renewal Date</th>
                                                            <th>Expire Date</th>
                                                            <th>Status</th>
                                                            <th>action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>001</td>
                                                            <td>abc title</td>
                                                            <td>May 2, 2020</td>
                                                            <td>May 20, 2020</td>
                                                            <td>$1234</td>
                                                            <td class="green">Paid</td>

                                                        </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modal disable rec payment -->
        <div class="modal fade" id="disable_recurring" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <p class="apply_heading">
                                    Confirmation
                                </p>
                                <p class="msg__txt">Recurring Payment has been disabled</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <a href="" class="btn-cv bloo mt-4 mr-0 mb-0" data-dismiss="modal">Got it</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <!-- Modal enable rec payment -->
        <div class="modal fade" id="enable_recurring" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <p class="apply_heading">
                                    Confirmation
                                </p>
                                <p class="msg__txt">Recurring Payment has been enabled</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <a href="" class="btn-cv bloo mt-4 mr-0 mb-0" data-dismiss="modal">Got it</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <!-- Modal change Package -->
        <div class="modal fade package-m" id="change_package" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <h4>Change Package</h4>
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-12">
                                <div class="wrap">
                                    <label class="w_container">
                                        <input type="radio" checked="checked" name="radio">
                                        <span>Plus</span>
                                        <span class="w_checkmark"></span>
                                    </label>
                                    <label class="w_container">
                                        <input type="radio" checked="checked" name="radio">
                                        <span>Elite</span>
                                        <span class="w_checkmark"></span>
                                    </label>
                                    <label class="w_container">
                                        <input type="radio" checked="checked" name="radio">
                                        <span>Foundation</span>
                                        <span class="w_checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-9 col-11 text-left m-auto">
                                <p class="smal-msg">Amount</p>
                                <p class="small-amnt">$1234</p>

                            </div>


                        </div>
                        <div class="row">
                            <div class="col-6 m-auto">
                                <a href="#" data-dismiss="modal" aria-label="Close" class="btn-sys" data-toggle="modal"
                                   data-target="#package-changed">Upgrade</a>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>

        <!-- Modal package updated -->
        <div class="modal fade" id="package-changed" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <p class="apply_heading">
                                    Change Package
                                </p>
                                <p class="msg__txt">Your Selected Package Would Be Applied <br>
                                    On Next Renewal </p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <a href="" class="btn-cv bloo mt-4 mr-0 mb-0" data-dismiss="modal">Got it</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <!-- Modal Payment -->
        <div class="modal fade package-m" id="payment_pckg" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <h4>Payment</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <form action="">
                                    <div class="form-row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="holderName">Card Holder Name</label>
                                                <input type="text" class="form-control modal-reg-input" id="holderName"
                                                       placeholder="Enter Name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="cNum">Card Number</label>
                                                <input type="number" class="form-control modal-reg-input" id="cNum"
                                                       placeholder="Enter Card Number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="cvv">CVV Code</label>
                                                <input type="text" class="form-control modal-reg-input" id="cvv"
                                                       placeholder="Enter Code Number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="modal-expiry">Expiry Date</label>
                                                <input type="text" class="form-control modal-reg-input"
                                                       id="modal-expiry" placeholder="Enter Name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12">
                                            <button type="submit" class="modal-pay" data-dismiss="modal"
                                                    data-toggle="modal" data-target="#update_success">Pay
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>

        <!-- Modal payment Success -->
        <div class="modal fade" id="update_success" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="images/check.png" alt="">
                                <p class="system-msg-bold">Payment Successful</p>
                            </div>
                            <div class="col-12 text-center">
                                <p class="msg__txt">Your Payment Has Been Completed Successfully.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <a href="" class="btn-cv bloo mt-4 mr-0 mb-0" data-dismiss="modal">Got it</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <!-- Modal payment failed -->
        <div class="modal fade" id="update_failed" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content recovery">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="images/error.jpg" alt="">
                                <p class="system-msg-bold">Payment Error</p>
                            </div>
                            <div class="col-12 text-center">
                                <p class="msg__txt">Your Payment Was Not Completed Successfully.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <a href="" class="btn-cv bloo mt-4 mr-0 mb-0" data-dismiss="modal">Got it</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <inner-page-footer></inner-page-footer>
    </div>
</template>
<script>
const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
const RegisterHeader = () => import('../../components/RegisterHeader.vue');

export default {
    created() {
    },
    components: {
        InnerPageFooter,
        RegisterHeader,
    },
}
</script>
