
<template>
    <header class="nav-home">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg  navbar-light"><a class="navbar-brand d-lg-none" target="_self"
                                                                          href="/">
                                                                          <img :src="`${base_url}/images/thumbnail.png`">
                                                                          </a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false"
                                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                        <div class="navbar-collapse justify-content-between collapse" id="navbarToggle" style="">
                            <router-link class="navbar-brand d-none d-lg-block" to="" >
                                <img :src="`${base_url}/images/thumbnail.png`">
                                </router-link>

                            <ul class="navbar-nav">
                                <li class="nav-item" ><router-link class="nav-link  " :class="(currentRouteName == 'user.users.index') ? 'active' : '' "   target="_self" :to="{name:'user.users.index'}">Home<span
                                    class="sr-only">(current)</span></router-link></li>
                                <li class="nav-item"><router-link class="nav-link " :class="(currentRouteName == 'user.about.index') ? 'active' : '' "  :to="{name: 'user.about.index'}">About Us </router-link></li>
                                 <li class="nav-item"><router-link class="nav-link" :class="(currentRouteName == 'user.faq.index') ? 'active' : '' " :to="{name: 'user.faq.index'}">FAQs</router-link></li>
                                <!-- <li class="nav-item"><router-link class="nav-link" :class="(currentRouteName == 'user.contact.index') ? 'active' : '' "  :to="{name:'user.contact.index'}">Contact Us</router-link></li> -->
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item btn-right" v-if="currentRouteName != 'user.auth.login'">
                                    <router-link :to="{name: 'user.auth.login'}" class="nav-link">Login as User
                                    </router-link>
                                </li>
                                <li class="nav-item btn-right" v-else-if="currentRouteName == 'user.auth.login'">
                                    <router-link :to="{name: 'user.auth.register'}" class="nav-link">Register as User
                                    </router-link>
                                </li>
                                <li class="nav-item btn-right" v-if="currentRouteName != 'user.auth.login'">
                                    <a :href="`${base_url}/business/login`" class="nav-link">Login as Business Owner</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
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
