<template>
    <header class="nav-user">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg  navbar-light navbar--bo">
                        <router-link class="navbar-brand d-lg-none" target="_self" :to="{name:'user.users.index'}"><img
                        :src="`${base_url}/assets/business/images/logo.png`"></router-link>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false"
                                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse justify-content-between collapse" id="navbarToggle"
                             style="">
                            <a class="navbar-brand d-none d-lg-block" target="_self" href="/"><img
                                :src="`${base_url}/assets/business/images/logo.png`"></a>

                            <ul class="navbar-nav nav-margin-left">
                               <!--  <li class="nav-item"><a class="nav-link active" target="_self" href="/">Job
                                    <span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Network & Training</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Create CV</a></li> -->
                            </ul>
                            <ul class="navbar-nav f-m-s">
                                <li class="nav-item btn-right">
                                    <router-link :to="{name: 'businessOwner.auth.login'}" class="nav-link" v-if="currentRouteName != 'businessOwner.auth.login'">
                                    Login as Business Owner
                                    </router-link>
                                </li>
                                <li class="nav-item btn-right">
                                    <router-link :to="{name: 'businessOwner.auth.register'}" class="nav-link" v-if="currentRouteName != 'businessOwner.auth.register'">
                                    Register as Business Owner
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!--container end end-->
    </header>
</template>
<script>
 export default {
     data(){
         return {

         }
     },
     computed: {
        currentRouteName() {
            return this.$route.name;
            //  console.log(this.$route.name);
        }
    }
 }
</script>