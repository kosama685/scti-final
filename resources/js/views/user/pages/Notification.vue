<template>
    <div>
         <register-header></register-header>
        <section class="user-home">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="page-heading">Notifications</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body ">

                                <div class="row" v-for="notification in notifications">
                                    <div class="col-12">
                                        <div class="notification__Wrapper shadow-sm">
                                            <div class="left">
                                                <i class="fa fa-bell-o" aria-hidden="true"></i>
                                                <div class="inner">
                                                    <p class="notif__Title">{{notification.title}}</p>
                                                    <p class="notif__time">{{formatDate(notification.created_at)}} | 10:30 AM</p>
                                                </div>
                                            </div>
                                            <!-- <div class="right">
                                                <a href="" class="view">View</a>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                               


                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
        <inner-page-footer></inner-page-footer>
    </div>
</template>
<script>
const InnerPageFooter = () => import('../components/InnerPageFooter.vue');
const RegisterHeader = () => import('../components/RegisterHeader.vue');
export default {
    data() {
        return {
            notifications: {},
        };
    },
    components: {
        InnerPageFooter,
        RegisterHeader,
    },
    async created() {
        await this.getNotification();
    },

    methods: {
        async getNotification() {
            this.notifications = (await axios.get('/api/admin/getNotification')).data
        },
        
    }
};
</script>