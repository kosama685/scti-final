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
                    <div class="error-main">
                    
                  
                        <div class="error-img">
                          <img :src="url('/assets/images/404.png')">
                        </div>
                        <div class="error-text">
                          <h2>Page Not Found</h2>
                          <p>We can’t find the page you’re looking for.</p>
                          <router-link :to="{name: 'Login'}"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Go To Homepage</router-link>
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