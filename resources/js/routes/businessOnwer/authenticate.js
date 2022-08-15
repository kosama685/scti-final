import meta from '../meta';

const businessOwner ={
    layout: {
        authenticated: () => import('../../Layouts/Business/Master.vue').then(m => m.default)
    },
     auth: {
        login: () => import('@views/businessOwner/auth/Login.vue'),
        register: () => import('@views/businessOwner/auth/register/register.vue'),
    },
    //error404 : ()=> import('@views/Pages/admin/Errors/404.vue'),
    dashboard : ()=> import('@views/businessOwner/pages/BusinessDashboard.vue'),
    jobs : {
         index : ()=> import('@views/businessOwner/pages/Jobs/index.vue'),
         create : ()=> import('@views/businessOwner/pages/Jobs/create.vue'),
         show : ()=> import('@views/businessOwner/pages/Jobs/show.vue'),
         editStatus : ()=> import('@views/businessOwner/pages/Jobs/editStatus.vue'),
         editJob : ()=> import('@views/businessOwner/pages/Jobs/editJob.vue'),
         candidate :{
             index: () => import('@views/businessOwner/pages/Jobs/Candidates/index.vue'),
             profile: () => import('@views/businessOwner/pages/Jobs/Candidates/profile.vue'),
         }
    	//datatable : ()=> import('@views/Pages/admin/Property/Datatable.vue'),
    },
    users: {
      business:{
            profile: () => import('@views/businessOwner/pages/businessUser/businessProfile.vue'),
            editProfile: () => import('@views/businessOwner/pages/businessUser/ProfileEdit.vue')
        }
    },
    subscriptions : {
        index: () => import('@views/businessOwner/pages/SubscriptionLog/index.vue'),
        invoice : ()=> import('@views/businessOwner/pages/SubscriptionLog/Invoice.vue'),

    },
    notifications : {
        index : ()=> import('@views/businessOwner/pages/Notification/index.vue'),
    },    
    chat:{
        view: () => import('@views/user/chat/ChatComponent.vue'),
    }
};

const routes = {
        path: '/',
        components:{
                default: businessOwner.layout.authenticated,
    },
        
        children: [
            {
                path: '/business/dashboard',
                component: businessOwner.dashboard,
                name: 'businessOwner.dashboard',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
                {
                path: '/business/chat/:id',
                component: businessOwner.chat.view,
                name: 'businessOwner.chat.view',
                meta: {...meta, requiresAuth: true, permission: null}
                },
            {
                path: '/business/jobs',
                component: businessOwner.jobs.index,
                name: 'businessOwner.jobs.index',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/jobs/create',
                component: businessOwner.jobs.create,
                name: 'businessOwner.jobs.create',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/jobs/edit/:id',
                component: businessOwner.jobs.editJob,
                name: 'businessOwner.jobs.editJob',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/jobs/show/:id',
                component: businessOwner.jobs.show,
                name: 'businessOwner.jobs.show',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/jobs/:id',
                component: businessOwner.jobs.editStatus,
                name: 'businessOwner.jobs.editStatus',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/subscription/invoice/:id',
                component: businessOwner.subscriptions.invoice,
                name: 'businessOwner.subscriptions.invoice',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/subscription/log',
                component: businessOwner.subscriptions.index,
                name: 'businessOwner.subscriptions.index',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/job/:job/candidate/profile/:id',
                component: businessOwner.jobs.candidate.profile,
                name: 'businessOwner.jobs.candidate.profile',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/candidates/job/:id',
                component: businessOwner.jobs.candidate.index,
                name: 'businessOwner.jobs.candidate.index',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
            {
                path: '/business/notification',
                component: businessOwner.notifications.index,
                name: 'businessOwner.notifications.index',
                meta: { ...meta, requiresAuth: true,permission : null}
            },
             {
                path: 'business/profile',
                component: businessOwner.users.business.profile,
                name: 'business.users.profile',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'business/profile/edit',
                component: businessOwner.users.business.editProfile,
                name: 'business.users.editProfile',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
          
        ]
}
   export default routes;
