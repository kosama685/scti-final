import meta from '../meta';

const user = {
     layout: {
        fullPage: () => import('../../Layouts/User/FullPage.vue').then(m => m.default),
        authenticated: () => import('../../Layouts/User/Master.vue').then(m => m.default)
    },
    job: {
        index: () => import('@views/user/pages/Job/index.vue'),
        show: () => import('@views/user/pages/Job/show.vue'),
        company_info: () => import('@views/user/pages/Job/company_info.vue'),
    },
    payLogs: {
        index: () => import('@views/user/pages/PayLogs/index.vue'),
    },
    trainingProgram: {
        index: () => import('@views/user/pages/TrainingPrograms/index.vue'),
        view: () => import('@views/user/pages/TrainingPrograms/view.vue'),
    },
    users: {
        dashboard : () => import('@views/user/pages/Dashboard.vue'),
        view: () => import('@views/user/pages/user/profile.vue'),
        edit: () => import('@views/user/pages/user/editProfile.vue'),
    },
    cvBiulder: {
        create: () => import('@views/user/pages/cvBiulder/create.vue'),
        view: () => import('@views/user/pages/cvBiulder/view.vue'),
        edit: () => import('@views/user/pages/cvBiulder/edit.vue'),
    },
    notification: {
        index: () => import('@views/user/pages/Notification.vue'),
    },
    contact:{
        index: () => import('@views/user/pages/contactUs.vue'),
    },
    chat:{
        view: () => import('@views/user/chat/ChatComponent.vue'),
    }
};
const routes = {
    path: '/',
    components: {
        default: user.layout.fullPage,
    },
    children:[
        {
            path: '/user/dashboard',
            component: user.users.dashboard,
            name: 'user.users.dashboard',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/profile/view',
            component: user.users.view,
            name: 'user.users.view',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/profile/edit/:id',
            component: user.users.edit,
            name: 'user.users.edit',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/job',
            component: user.job.index,
            name: 'user.job.index',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/job/show/:id',
            component: user.job.show,
            name: 'user.job.show',
            meta: {...meta, requiresAuth: true, permission: null}
        },
	{
            path: '/user/job/company_info/:id',
            component: user.job.company_info,
            name: 'user.job.company_info',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/job/company_info/:id',
            component: user.job.company_info,
            name: 'user.job.company_info',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/pay-logs',
            component: user.payLogs.index,
            name: 'user.payLogs.index',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/training-program',
            component: user.trainingProgram.index,
            name: 'user.trainingProgram.index',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/training-program/view/:id',
            component: user.trainingProgram.view,
            name: 'user.trainingProgram.view',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/training-program/view',
            component: user.trainingProgram.view,
            name: 'user.trainingProgram.view',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/cvBiulder/create',
            component: user.cvBiulder.create,
            name: 'user.cvBiulder.create',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/cvBiulder/view',
            component: user.cvBiulder.view,
            name: 'user.cvBiulder.view',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/cvBiulder/edit',
            component: user.cvBiulder.edit,
            name: 'user.cvBiulder.edit',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/nofications/view',
            component: user.notification.index,
            name: 'user.notification.index',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        {
            path: '/user/contact-us',
            component: user.contact.index,
            name: 'user.contact.index',
            meta: {...meta, requiresAuth: true, permission: null}
        },
             {
            path: '/user/chat/:id',
            component: user.chat.view,
            name: 'user.chat.view',
            meta: {...meta, requiresAuth: true, permission: null}
        },
    ]
}

export default routes;
// contact.index