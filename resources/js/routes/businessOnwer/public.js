import meta from '../meta';

const businessOwner ={
    layout: {
        fullPage: () => import('../../Layouts/Business/FullPage.vue').then(m => m.default),
        authenticated: () => import('../../Layouts/Admin/Master.vue').then(m => m.default)
    },
     auth: {
        login: () => import('@views/businessOwner/auth/Login.vue'),
        register: () => import('@views/businessOwner/auth/register/register.vue'),
    },
   // error404 : ()=> import('@views/Pages/admin/Errors/404.vue'),
   // dashboard : ()=> import('@views/Pages/admin/BusinessDashboard.vue'),
    users : {
        //index : ()=> import('@views/Pages/admin/User/Index.vue')
    },
    jobs : {
        // index : ()=> import('@views/Pages/admin/Property/Index.vue'),
        // show : ()=> import('@views/Pages/admin/Property/Show.vue'),
    	//datatable : ()=> import('@views/Pages/admin/Property/Datatable.vue'),
    },
    subscriptions : {
        // index : ()=> import('@views/Pages/admin/Subscription/Index.vue'),
        // show : ()=> import('@views/Pages/admin/Subscription/Show.vue'),
    },
    notifications : {
       // index : ()=> import('@views/Pages/admin/Notification/Index.vue'),
    },
};

const routes = {
        path: '/',
        components:{
                default: businessOwner.layout.fullPage,
        },
        children: [
            {
                path: '/business/login',
                component: businessOwner.auth.login,
                name: 'businessOwner.auth.login',
                meta: { ...meta,loggedInCan: false}
            },
            {
                path: 'business/register',
                component: businessOwner.auth.register,
                name: 'businessOwner.auth.register',
                meta: {...meta,loggedInCan: false}
            }
        ]
}
   export default routes;
