<template>
 <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-12">
                                            <h1><i class=""></i>View Invoice</h1>
                                        </div>

                                    </div>
                                    <div class="customer-top">
                                        <div class="row mb-4">
                                            <div class="col-6">
                                                <div class="media">

                                                    <div class="media-body media_margin">
                                                        <h6 class="bo-name">{{invoice_preview.user.first_name}} {{invoice_preview.user.last_name}}</h6>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="row offset-lg-1 align-items-center">

                                            <div class="col-md-4">
                                                <h3 for="">Subscription Date</h3>
                                                <span for="">{{ formatDate(invoice_preview.created_at) }}</span>
                                            </div>

                                            <div class="col-md-4">
                                                <h3 for="">Package Type</h3>
                                                <label for="">{{ invoice_preview.packages.package_name }}</label>
                                            </div>

                                            <div class="col-md-4">
                                                <h3 for="">Last Renewal Date</h3>
                                                <label for="">{{ formatDate(invoice_preview.created_at) }}</label>
                                            </div>

                                             <div class="col-md-4">
                                                <h3 for="">Expire Date</h3>
                                                <label for="">{{ formatDate(invoice_preview.expiry_date) }}</label>
                                            </div>

                                            <div class="col-md-4">
                                                <h3 for="">Charges</h3>
                                                <label for="">{{ invoice_preview.charges }}</label>
                                            </div>

                                            <div class="col-md-4">
                                                <h3 for="">Status</h3>
                                                <label for="">{{ (invoice_preview.user.status == 1) ? 'Active' : 'Inactive'}}</label>
                                            </div>

                                            <a @click="download()" class="btn-green-pckg">Download Invoice</a>

                                        <!-- <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                            <tr>
                                                <th>Subscription Date</th>
                                                <th>Package Type</th>
                                                <th>Last Renewal Date</th>
                                                <th>Expire Date</th>
                                                <th>Charges</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>{{ formatDate(invoice_preview.created_at) }}</td>
                                                <td>{{ invoice_preview.packages.package_name }}</td>
                                                <td>{{ formatDate(invoice_preview.created_at) }}</td>
                                                <td>{{ formatDate(invoice_preview.expiry_date) }}</td>
                                                <td>{{ invoice_preview.charges }}</td>
                                                <td>{{ (invoice_preview.user.status == 1) ? 'Active' : 'Inactive'}}</td>
                                            </tr>
                                             <tr v-if="typeof invoice_preview.users != 'undefined' && invoice_preview.users.length == 0">
                                                    <td colspan="8">
                                                      No Data Available
                                                    </td>
                                                  </tr>
                                            </tbody>
                                        </table> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

  export default{
    data() {
      return {
        invoice_preview: {},
        search: '',
        entries: 10,
      };
    },
    async created() {
      await this.invoice();
    },
    methods: {
      async invoice() {
        let id = this.$route.params.id;
        let res = await axios.get(`/api/admin/invoice/`+id);
        this.invoice_preview = res.data;
        console.log(this.invoice_preview);
      },
      

      async download(){
        // let response = `${window.base_url}/api/admin/downloadbusinessinvoice`;
        let response = await axios.get(`/api/admin/downloadbusinessinvoice/`+this.$route.params.id, {responseType: 'arraybuffer'})
        .then(response => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'Invoice.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
        });

    //         axios.get(this.appApiPath + '/testpdf',
    //     {responseType: 'arraybuffer'})
    // .then(response => {
    //         var fileURL = window.URL.createObjectURL(new Blob([response.data]));
    //         var fileLink = document.createElement('a');
    //         fileLink.href = fileURL;
    //         fileLink.setAttribute('download', 'test.xlsx');
    //     document.body.appendChild(fileLink);
    //     fileLink.click();
    //     })
        // console.log(response.data);
        // let form = document.createElement('form');
        // form.setAttribute('method','GET');
        // form.setAttribute('action', response);
        // document.body.appendChild(form);
        // form.submit();

                    // if(response.data.status=="success") {
                    //     const url = window.URL.createObjectURL(new Blob([response.data.data], {type: 'application/pdf'}));
                    //     const link = document.createElement('a');
                    //     console.log(link);
                    //     link.href = url;
                    //     link.setAttribute('download', 'staffs.pdf'); //or any other extension
                    //     document.body.appendChild(link);
                    //     link.click();
                    // } else{
                    //     alert("Not Authenticated");
                    // }
        //  if(response.data.status=="success") {
                        // const url = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
                        // const link = document.createElement('a');
                        // console.log(link);
                        // link.href = url;
                        // link.setAttribute('download', 'staffs.pdf'); //or any other extension
                        // document.body.appendChild(link);
                        // link.click();
                    // } else{
                    //     alert("Not Authenticated");
                    // }
      }
    }
  }
</script>
