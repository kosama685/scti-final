<template>
 <div class="content-wrapper">
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration" class="search view-cause">
      <div class="row">
        <div class="col-12">
          <div class="card rounded pad-20">
            <div class="card-content collapse show">
              <div class="card-body  card-dashboard">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form ref="EditProfileForm" @submit.prevent="handleSubmit(EditEmployee)">
                    <div class="row">
                      <div class="col-md-12 col-12">
                        <h1 class="pull-left u-m">
                          <router-link class="arrow-left" :to="{name: 'Employees'}">
                            <i class="fa fa-chevron-left"></i>
                          </router-link>
                          Edit Employee
                        </h1>
                      </div>

                    </div>
                    <div class="row">
                      <div class="col-lg-12">


                        <div class="profile-img text-center edit-profille-img">
                          <img :src="cropped" alt="" class="img-profile">
                          <button name="file" class="camera-btn"><i class="fa fa-camera" ></i>  <input type="file" id="upload" name="file_photo" @change="croppie"></button>
                        </div>


                        <div class="modal fade" id="cropImagePop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">
                                Edit Photo</h4>
                              </div>
                              <div class="modal-body">
                                <vue-croppie
                                ref="croppieRef"
                                :enableOrientation="true"
                                :boundary="{ width: 450, height: 300}"
                                >
                              </vue-croppie>

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                              <button type="button" id="cropImageBtn" class="btn btn-primary" @click="crop">Crop</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="add-user-wrapper">
                   <div class="personal-details-wrapper">
                    <h2>Personal Details</h2>

                    <div class="row">
                     <div class="col-lg-6">

                      <ValidationProvider name="First Name" rules="required"   v-slot="{errors}">
                        <label for="">First Name</label>
                        <input name="first_name" v-model="editProfile.first_name"  type="text" class="input-fields-article w-100 form-control" placeholder="Enter First Name">
                        <span class="text-danger">{{errors[0]}}</span>
                      </ValidationProvider>

                    </div>
                    <div class="col-lg-6">
                     <ValidationProvider name="Last Name" rules="required" v-slot="{errors}">
                      <label for="">Last Name</label>
                      <input  name="last_name" v-model="editProfile.last_name"  type="text" class="input-fields-article w-100 form-control" placeholder="Enter Last Name">
                      <span class="text-danger">{{errors[0]}}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row">
                 <div class="col-lg-6">

                  <ValidationProvider name="Phone Number" rules="required" v-slot="{errors}">
                    <label for=""> Phone Number</label>
                    <input  name="phone_number" v-model="editProfile.phone"  type="text" value="test@gmail.com" class="input-fields-article w-100 form-control" placeholder="Enter Phone Number">
                    <span class="text-danger">{{errors[0]}}</span>
                  </ValidationProvider>

                </div>
                <div class="col-lg-6">

                  <ValidationProvider name="Email" rules="required" v-slot="{errors}">
                    <label for="">Email</label>
                    <input  name="email" v-model="editProfile.email"  type="text" class="input-fields-article w-100 form-control" readonly >
                    <span class="text-danger">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
              </div>


            </div>
          </div>
          <div class="personal-details-wrapper">
            <h2>Address Details</h2>

            <div class="row">
             <div class="col-lg-6">

               <ValidationProvider name="Address" rules="required" v-slot="{errors}">
                <label for=""> Address</label>
                <input  name="address" v-model="editProfile.address"  type="text" class="input-fields-article w-100 form-control" placeholder="Enter Address Here">
                <span class="text-danger">{{errors[0]}}</span>
              </ValidationProvider>

            </div>
            <div class="col-lg-6">

              <ValidationProvider name="Country" rules="required" v-slot="{errors}">
                <label for=""> Country</label>
                <input name="country" v-model="editProfile.country" type="text" class="input-fields-article w-100 form-control" placeholder="Enter Country Here">
                <span class="text-danger">{{errors[0]}}</span>
              </ValidationProvider>

            </div>
          </div>
          <div class="row">
           <div class="col-lg-6">

            <ValidationProvider name="State" rules="required" v-slot="{errors}">
              <label for=""> State</label>
              <input  name="state" v-model="editProfile.state"  type="text" class="input-fields-article w-100 form-control" placeholder="Enter state here">
              <span class="text-danger">{{errors[0]}}</span>
            </ValidationProvider>

          </div>
          <div class="col-lg-6">

           <ValidationProvider name="City" rules="required" v-slot="{errors}">
            <label for=""> City</label>
            <input  name="city" v-model="editProfile.city" type="text" class="input-fields-article w-100 form-control" placeholder="Enter city here">
            <span class="text-danger">{{errors[0]}}</span>
          </ValidationProvider>

        </div>
      </div>
    </div>

    <div class="row">
     <div class="col-lg-6">

      <ValidationProvider name="Post code" rules="required" v-slot="{errors}">
        <label for=""> Post code</label>
        <input name="zip_code" v-model="editProfile.zip_code"  type="text" class="input-fields-article w-100 form-control" placeholder="Enter Post code here">
        <span class="text-danger">{{errors[0]}}</span>
      </ValidationProvider>

    </div>

  </div>
  <div class="cancel-and-update-button-wrapper text-center">
   <button type="submit"  class="primary-button">Update</button>

 </div>

</form>
</ValidationObserver>
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
  export default {
    data() {
      return {
        croppieImage: '',
        cropped: null,
        email:'',
        file: '',
        first_name:'',
        last_name: '',
        phone_number: '',
        address: '',
        country: '',
        state: '',
        city: '',
        zip_code: '',
        editProfile: {}

      };
    },
     async created() {
      await this.getEmployee();
      this.cropped = url('/images/users/')+this.editProfile.image;
    },
    methods: {
      async getEmployee() {
        let res = await axios.get(`/api/admin/edit/employee/${this.$route.params.id}`);
        this.editProfile = res.data;
        console.log(this.editProfile);
      },
      croppie (e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;

        var reader = new FileReader();
        reader.onload = e => {
          this.$refs.croppieRef.bind({
            url: e.target.result
          });
        };
        $('#cropImagePop').modal('show');
        reader.readAsDataURL(files[0]);
      },
      crop() {
      // Options can be updated.
      // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
      let options = {
        type: 'base64',
        size: { width: 150, height: 200 },
        format: 'jpeg'
      };
      this.$refs.croppieRef.result(options, output => {
        this.cropped = this.croppieImage = output;
        $('#cropImagePop').modal('hide');
        console.log(this.croppieImage);
      });
    },
    async EditEmployee(e){
      let fd = new FormData(this.$refs.EditProfileForm);
      fd.append('id', this.$route.params.id);
      let response = await axios.post('/api/admin/employee-update', fd);
      if(response.data.data){
        this.$snotify.success(response.data.message)
        let self = this;
        setTimeout(function(){
          self.$router.push({name : 'Employees'});
        },1000);
      }else{
        this.$snotify.error(response.data.message)

      }
    }




  }
};
</script>
