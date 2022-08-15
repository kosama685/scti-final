import Vue from 'vue';
//const LoginMessage = () => import('@/views/users/components/LoginPopup.vue');
Vue.mixin({
	data () {
	  return {
	  };
	},
	computed:{
		authUser : {
			get(){

			return this.$store.state.loginUser;
			},
			set(value){
				this.$store.state.loginUser = value;
			}
		}
	},
	// components  : {
	// 	LoginMessage,
	// },
    methods: {

    	loginUser(){
    		return this.authUser;
    	},
        url(path) {
            return process.env.MIX_URL + path;
        },
        isLoggedIn() {
            var isLoggedIn = localStorage.getItem('isLoggedIn');
            var userType = localStorage.getItem('userType');
            return isLoggedIn === '1' && userType == 'user';
        }
    }
});
