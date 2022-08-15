<template>
    <!-- fixed-top-->
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
                    <li class="nav-item">
                        <router-link class="navbar-brand" :to="{name:'AdminHome'}"> <img class="brand-logo"
                                alt="stack public logo" src="public/images/green-logo.png"> </router-link>
                    </li>
                    <li class="nav-item d-md-none"> <a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="fa fa-ellipsis-v"></i></a> </li>
                </ul>
            </div>
            <div class="navbar-container content">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                    </ul>
                    <ul class="nav navbar-nav float-right">
                        <bell-notification></bell-notification>
<!--                        <li class="dropdown dropdown-notification nav-item"> <a class="nav-link nav-link-label dropdown-toggle" href="#" data-toggle="dropdown"><i class="fa fa-bell"></i>-->
<!--                            </a>-->
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
<!--                                <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">View all</a></li>-->
<!--                            </ul>-->
<!--                        </li>-->
                        <li class="dropdown dropdown-user nav-item">
                            <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"> <span class="avatar avatar-online"> <img
                                        src="public/images/student-pro-girl.png" alt="avatar"></span> <span class="user-name">Admin</span> </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item text-left" href="profile.php"><i
                                                class="fas fa-user-circle"></i>My Profile</a></li>
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
const BellNotification = ()=> import('../BellNotification.vue')
export default {
     components : {
        BellNotification,
    },
    methods: {
        async logout() {
            await axios.post('admin/auth/logout');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userType');
            localStorage.removeItem('auth-id');
            this.$snotify.success('Logout Successfully');
            let self = this;
            setTimeout(function() {
                self.$router.push({ name: 'Login' });
            }, 2000);
        }
    }
}

</script>
