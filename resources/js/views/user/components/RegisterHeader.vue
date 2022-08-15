<template>
    <div>
        <header class="nav-user">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-lg  navbar-light">
                            <router-link class="navbar-brand d-lg-none"
                                                                              target="_self" :to="{name : 'user.users.dashboard'}"><img
                            :src="`${base_url}/assets/user/images/logo.png`"></router-link>
                            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                    data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false"
                                    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                            <div class="navbar-collapse justify-content-between collapse" id="navbarToggle" style="">
                                <router-link class="navbar-brand d-none d-lg-block" target="_self" :to="{name : 'user.users.dashboard'}"><img
                                    :src="`${base_url}/assets/user/images/logo.png`"></router-link>

                                <ul class="navbar-nav nav-margin-left">
                                    <li class="nav-item"><router-link class="nav-link " target="_self" :to="{name: ''}">Career Center <span
                                        class="sr-only">(current)</span></router-link></li>

                                    <li class="nav-item"><router-link class="nav-link " target="_self" :to="{name: 'user.users.dashboard'}">Browse Jobs <span
                                        class="sr-only">(current)</span></router-link></li>

                                    <li class="nav-item"><router-link class="nav-link " target="_self" :to="{name: 'user.contact.index'}">Contact<span
                                        class="sr-only">(current)</span></router-link></li>
                                    <!-- <li class="nav-item"><router-link class="nav-link" :to="{name:'user.trainingProgram.index'}">Network & Training</router-link></li> -->
                                    <!-- <li class="nav-item"><button class="nav-link" @click="openCvBuilder()">Create CV</button></li> -->
                                </ul>

                                <ul class="navbar-nav f-m-s" v-if="isSession">
                                    <li class="nav-item btn-right">
                                        <router-link :to="{name: 'user.auth.login'}" class="nav-link">
                                            Login as User
                                        </router-link>
                                    </li>
                                    <li class="nav-item btn-right">
                                        <a :href="`${base_url}/business/login`" class="nav-link">Login as Business Owner</a>
                                    </li>
                                    <!-- <li class="nav-item btn-right">
                                        <router-link :to="{name: 'user.auth.register'}" class="nav-link">
                                            Register as User
                                        </router-link>
                                    </li> -->
                                </ul>

                                <ul v-else class="navbar-nav d-flex align-items-lg-center align-items-start justify-content-center"
                                    >

                                    <li class="dropdown dropdown-user nav-item user_dropdown ">
                                              <a class="dropdown-item" href="" data-toggle="modal"
                                            data-target="#logout" @click="logout()"> <i class="fa fa-arrow-circle-right"
                                                                    aria-hidden="true"></i> Logout</a>

                                     </li>
                                    <li class="nav-item d-lg-block d-none dropdown notifications">
                                        <a href="" class=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            <i class="fa fa-bell" aria-hidden="true"></i>
                                        </a>

                                        <div class="dropdown-menu notif_dd" aria-labelledby="dropdownMenuButton">
                                            <div v-if="notifications.length != 0">
                                                
                                            
                                            <router-link :key="index"  class="dropdown-item" :to="{name: 'user.notification.index'}" v-for="notification,index in notifications">
                                                <div class="notificaiton-wrapper">
                                                    <div class="top">
                                                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                                                        <p class="notfTitle">{{notification.title}}</p>
                                                    </div>
                                                    <div class="bottom">
                                                        <span>{{formatDate(notification.created_at)}} | 10:30PM</span>
                                                        <p>View all</p>
                                                    </div>
                                                </div>
                                            </router-link>
                                            </div>
                                            <h4 v-else>No notification found</h4>
                                            
                                        </div>

                                    </li>
                                    
                                    <li class="dropdown dropdown-user nav-item user_dropdown ">
                                        <a class="dropdown-toggle nav-link dropdown-user-link" href="#"
                                           data-toggle="dropdown" aria-expanded="true">
                                    <span class="avatar avatar-online">
                                        <img :src="editProfile.image" class="avatar"
                                             alt="avatar">
                                    </span>
                                            <span class="user-name">{{editProfile.name}} </span>
                                        </a>

                                        


                                        <div class="dropdown-menu dropdown-menu-right user-dd ">
                                              <router-link class="dropdown-item" :to="{name: 'user.users.view'}"><i
                                                class="fa fa-user-circle" aria-hidden="true"></i>My Profile
                                            </router-link>
                                            <router-link class="dropdown-item" :to="{name: 'user.users.dashboard'}"><i
                                                class="fa fa-user-circle" aria-hidden="true"></i> Browse Jobs
                                            </router-link>
                                            <!-- <router-link class="nav-link " target="_self" :to="{name: 'user.users.dashboard'}">Browse Jobs <span
                                        class="sr-only">(current)</span></router-link> -->
                                            <!-- <router-link class="dropdown-item" :to="{name: 'user.job.index'}"><i
                                                class="fa fa-briefcase"
                                                aria-hidden="true"></i> My
                                                Jobs
                                            </router-link>
                                            <a class="dropdown-item" href="" data-toggle="modal"
                                            data-target="#logout" @click="logout()"> <i class="fa fa-arrow-circle-right"
                                            aria-hidden="true"></i> Logout</a> -->
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                   <!--  -->
                </div>
            </div>
            <!--container end end-->
        </header>
        <section class="nav-bg"></section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSession: true,
            editProfile: {},
            notifications: {},
        };
    },
    async created() {
        await this.getProfile();
        //await this.notifications();
        let accesstoken = localStorage.getItem('access-token');
        let userType = localStorage.getItem('userType');

        if (accesstoken && userType == 'user') {
            this.isSession = false;
            // this.$router.push({name: 'user.users.dashboard'});
        } else {
            this.isSession = true;
        }
        console.log(this.isSession);

    },

    methods: {
        async getProfile() {
            this.editProfile = (await axios.get('/api/admin/getProfile')).data.data;
            this.notifications = (await axios.get('/api/admin/getNotification')).data;
            
        },
        openCvBuilder(){
            let packageBooleanTrial = localStorage.getItem('packageBooleanTrial');
            if(packageBooleanTrial == 1)
            {
                this.$snotify.error('You are in trial pacakge please update your package');
            }
            else
            {
                this.$router.push({ name: 'user.cvBiulder.create' });
            }
        },
        async logout() {
            window.localStorage.setItem('logoutItem',true);
            await axios.post('/api/admin/logout');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userType');
            localStorage.removeItem('access-token');
            this.$snotify.success('Logout Successfully');
            let self = this;
            setTimeout(function() {
                self.$router.push({ name: 'user.auth.login' });
            }, 2000);
        },
        
    }
};
</script>
