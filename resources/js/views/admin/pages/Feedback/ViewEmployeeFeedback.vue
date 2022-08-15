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
                  <div class="row">
                    <div class="col-md-12 col-12">
                      <h1 class="pull-left u-m">
                        <router-link class="arrow-left" :to="{name: 'Feedback'}">
                          <i class="fa fa-chevron-left"></i>
                       </router-link>
                       User Feedback Details</h1>
                    </div>
                
                  </div>
                    <div class="row">
                        <div class="col-lg-12">
                          
                            <div class="profile-img text-center edit-profille-img">
                                <img :src="url('images/profileimg.png')" alt="" class="img-profile">
                                <!-- <button name="file" class="camera-btn" onclick="document.getElementById('upload').click()"><i class="fa fa-camera"></i></button>   
                                <input type="file" id="upload" name="file"> -->
                                <p>User Id: <span class="id"> 001 </span> <span class="px-2"> | </span> Registration Date: <span class="date"> May 15,2020</span>  </p>
                            </div>
                        </div>
                    </div>
                   <div class="add-user-wrapper">
                           <div class="personal-details-wrapper my-5">
                      
            
                             <div class="row">
                                   <div class="col-lg-4">
                                       <label for="#">
                                         <!-- <i class="fa fa-id-card" aria-hidden="true"></i> -->
                                         First Name</label>
                                 <input type="text" class="w-100 d-block form-control disabled-input-fields" placeholder="Peter" disabled>    
                                     
                                   </div>
                                   <div class="col-lg-4">
                                       <label for="#">Last Name</label>
                                       <input class="w-100 d-block form-control disabled-input-fields" type="text" placeholder="Parker" disabled>
                                   
                                 </div>
                                 <div class="col-lg-4">
                                    <label for="#">
                                      <!-- <i class="fa fa-envelope"></i> -->
                                      Email </label>
                                    <input class="w-100 d-block form-control disabled-input-fields" type="email" placeholder="peter.parker@gmailcom" disabled>
                                </div>
                             </div>
                             <div class="row">
                                 <div class="col-lg-6">
                                   <label for="#">
                                     <!-- <i class="fa fa-phone"></i> -->
                                     Subject</label>
                                   <input class="w-100 d-block form-control disabled-input-fields" type="text" placeholder="Contrary to popular belief, Lorem Ipsum is not simply random text" disabled>
                                     
                                     
                                 </div>
                             </div>
                             <div class="row">
                                 <div class="col-lg-12">
                                   <label for="#">
                                     <!-- <i class="fa fa-envelope"></i> -->
                                     Message </label>
                                    <textarea class="w-100 d-block form-control disabled-textarea-fields"  placeholder="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literat urediscovered the undoubtable source." disabled></textarea>
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
    </div>
  </div>
</template>