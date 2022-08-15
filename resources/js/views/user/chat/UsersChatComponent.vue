<template>
    <section class="col-12">
        <div class="container">
            <div class="row" id="ocs-call-window"></div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                baseUrl: window.base_url,
                user: window.user,
                soachat: window.soachat,
                ocs: window.ocs,
                init : 1,
            }
        },
        mounted() {
            this.initSoachat();
                this.resetMessageCounter();
            window.addEventListener("message", (event)=>{
                if(event.data.recipiant_id){
                    axios.post('update-notification-count',{ receipant_id : event.data.recipiant_id, init : 0,});
                this.init = 0;
                }
                
            });
        },
        methods: {
           resetMessageCounter(){
                axios.post('reset-notification-count',{receipant_id: user.uuid});
            },
            initSoachat() {
                this.ocs.init({
                    appid: "959b2e8864e612612c8474842f4612cb",
                    appkey: "7feffcf8e08e194a9b46b4bce30c0e9c",
                    domain: "dev28.onlinetestingserver.com",
                    global: (this.$route.params.id) ? '0' : '1',
                    id: user.uuid,
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