<template>
    <!-- fixed-top-->
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                    <li class="nav-item">
                        <router-link class="navbar-brand" :to="{name:'public.dashboard'}"> 
                           
                            <img class="brand-logo" alt="stack public logo" :src="`${base_url}/assets/images/logo.png`">
                             </router-link>
                    </li>
                    <li class="nav-item d-md-none"> <a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="fa fa-ellipsis-v"></i></a> </li>
                </ul>
            </div>
            <div class="navbar-container content">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                    </ul>
                    <ul class="nav navbar-nav float-right">
<!--                        <li class="dropdown dropdown-notification nav-item"> <a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon ft-bell"></i> <span class="badge badge-pill badge-default badge-danger badge-default badge-up">5</span> </a>-->
<!--                            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">-->
<!--                                <li class="dropdown-menu-header">-->
<!--                                    <h6 class="dropdown-header m-0"> <span class="grey darken-2">Notifications</span> <span class="notification-tag badge badge-default bg-dark float-right m-0">5 New</span> </h6>-->
<!--                                </li>-->
<!--                                <li class="scrollable-container media-list ps-container ps-theme-dark ps-active-y" data-ps-id="cbae8718-1b84-97ac-6bfa-47d792d8ad89"> <a href="javascript:void(0)">-->
<!--                                        <div class="media">-->
<!--                                            <div class="media-left align-self-center"><i class="fa fa-envelope icon-bg-circle bg-dark"></i></div>-->
<!--                                            <div class="media-body">-->
<!--                                                <h6 class="media-heading">You have new order!</h6>-->
<!--                                                <p class="notification-text font-small-3 text-muted">Lorem ipsum </p>-->
<!--                                                <small>-->
<!--                                                    <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time>-->
<!--                                                </small>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </a>-->
<!--                                    <a href="javascript:void(0)">-->
<!--                                        <div class="media">-->
<!--                                            <div class="media-left align-self-center"><i class="fa fa-envelope icon-bg-circle bg-dark"></i></div>-->
<!--                                            <div class="media-body">-->
<!--                                                <h6 class="media-heading">You have new order!</h6>-->
<!--                                                <p class="notification-text font-small-3 text-muted">Lorem ipsum </p>-->
<!--                                                <small>-->
<!--                                                    <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time>-->
<!--                                                </small>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li class="dropdown-menu-footer"><router-link class="dropdown-item text-muted text-center" :to="{name: 'Notifications'}">View all</router-link></li>-->
<!--                            </ul>-->
<!--                        </li>-->
                        <li class="dropdown dropdown-user nav-item">
                            <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"> <span class="avatar avatar-online"> <img :src="profile.image" alt="avatar"> </span> <span class="user-name">{{profile.name}}</span> </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <router-link class="dropdown-item" data-toggle="modal" :to="{name:'admin.users.admin.profile'}"><i class="fa fa-user-circle"></i>Profile</router-link>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" data-toggle="modal" @click="logout()" href="#logoutmodal"><i class="fa fa-power-off"></i>Logout</a>
                            </div>
                        </li>
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- ////////////////////////////////////////////////////////////////////////////-->
</template>
<script>
    import {mapActions, mapState} from 'vuex';
const BellNotification = ()=> import('@core/components/BellNotification.vue')
export default {
    data() {
      return {
        name: '',
        image: '',
        editProfile: {}
      };
    },
    async created() {
        this.fetch();
        this.name = editProfile.name;
        this.image = editProfile.image;
    },
     computed: {
        ...mapState('admin', ['profile','admin']),
    },
     components : {
        BellNotification,
    },
    methods: {
        ...mapActions('admin', ['getAll']),
        async fetch() {
                let {type, status} = this.$route.params;
                let params = {
                    route: 'api/admin/getProfile',
                    mutation: 'SET_PROFILE',
                    variable: 'data',
                };
                let {data} = await this.getAll(params);
                console.log(data);
                this.editProfile = data.data;

              

                    this.addRouteQuery({});

            },
   //      async getProfile() {
			// 	this.editProfile = (await axios.get('/api/admin/getProfile')).data;
			// 	localStorage.setItem('image',this.editProfile.image);
			// 	console.log(this.editProfile);
			// },
        async logout() {
            window.localStorage.setItem('logoutItem',true);
            await axios.post('/api/admin/logout');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userType');
            localStorage.removeItem('access-token');
            this.$snotify.success('Logout Successfully');
            let self = this;
            setTimeout(function() {
                self.$router.push({ name: 'admin.auth.login' });
            }, 2000);
        }
    }
}

</script>
