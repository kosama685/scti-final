import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes.js';

Vue.use(VueRouter)

const router = new VueRouter({
	mode : 'history',
	base : process.env.NODE_ENV == 'development'?'latest_scti':'/latest_scti',
	routes,
});
export default router;
