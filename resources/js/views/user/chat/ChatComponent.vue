
<template>
<div>
    <!-- <register-header></register-header> -->
    <section class="col-12">
        <div class="container">
            <div class="row" id="ocs-call-window"></div>
        </div>
    </section>
    <!-- <inner-page-footer></inner-page-footer> -->
</div>
</template>

<script>
// const RegisterHeader = () => import('../../components/RegisterHeader.vue');
// const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
    export default {
        components: {
            // RegisterHeader,
            // InnerPageFooter
        },
        data() {
            return {
                baseUrl: window.base_url,
                user: window.user,
                soachat: window.soachat,
                ocs: window.ocs,
                init : 1,
                connection: null
            }
        },
        // created(){
        //     console.log("starting connection ");
        //     this.connection = new WebSocket("wss://echo.websocket.org");

        //     this.connection.onopen = function(event){
        //         console.log('new websocket',event);
        //         console.log("successfully connected to echo websocket connection")
        //     }
        //     this.connection.onmessage = function (event) {
        //         console.log('new websocket',event);
        //     }
        // },
        mounted() {
            this.initSoachat();
            // this.resetMessageCounter();
            //   // Allow window to listen for a postMessage
            // window.addEventListener("message", (event)=>{
            //      console.log(event);
            //       if(event.data.recipiant_id){
            //         axios.post('update-notification-count',{ receipant_id : event.data.recipiant_id, init : 0,});
            //     this.init = 0;
            //     }
                
            // });
        },
        methods: {
            resetMessageCounter(){
                axios.post('reset-notification-count',{receipant_id: user.uuid});
            },
            initSoachat() {

                console.log("windowu user ",window.localStorage.uuid);
                this.ocs.init({
                    appid: "f2fb81f306ba77c5fa902cdbe8a08a4c",
                    appkey: "3273067e033b761ba36a31d13c1e2048",
                    domain: "sctijobs.com",
                    global: (this.$route.params.id) ? '0' : '1',
                    id: window.localStorage.uuid,
                    toid: (this.$route.params.id) ? this.$route.params.id : '',
                    element: "#ocs-call-window",
                    colorScheme: '0042B9',
                });
            }
        },
        watch: {}
    }
</script>

<style>

</style>