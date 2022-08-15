
import meta from '../meta';
const admin = {
    layout: {
        authenticated: () => import('../../Layouts/Admin/Master.vue').then(m => m.default)
    },
    auth: {
        login: () => import('@views/admin/auth/Login.vue'),
        forgotPassword:() => import('@views/admin/auth/ForgotPassword'),
        passwordVerificationCode: () => import('@views/admin/auth/PasswordVerificationCode'),
        forgotNewPassword: () => import('@views/admin/auth/NewPassword')
    },
    error404 : ()=> import('@views/admin/pages/Error/404.vue'),
    dashboard : ()=> import('@views/admin/pages/AdminDashboard.vue'),
    users : {
        index : () => import('@views/admin/pages/Users/Users.vue'),
        add: () => import('@views/admin/pages/Users/AddUser.vue'),
        edit: () => import('@views/admin/pages/Users/EditUser.vue'),
        block: () => import('@views/admin/pages/Users/BlockUsers.vue'),
        profile: () => import('@views/admin/pages/Users/UserProfile.vue'),
        admin:{
            profile: () => import('@views/admin/pages/AdminUser/AdminProfile.vue'),
            editProfile: () => import('@views/admin/pages/AdminUser/ProfileEdit.vue')
        }
    },
    business: {
      index: () => import('@views/admin/pages/BusinessOwner/BusinessOwner.vue'),
      block:() => import('@views/admin/pages/BusinessOwner/BlockBusinessOwner.vue')
    },
    job : {
      index:() => import('@views/admin/pages/Job/job.vue'),
      show:() => import('@views/admin/pages/Job/JobDetails.vue'),
      candidate:() => import('@views/admin/pages/Job/viewCandidateJob.vue'),

    },
    category:{
      categoryManagement :() => import('@views/admin/pages/Category/CategoryManagment.vue')
    },
    networkTraining:{
      index: () => import('@views/admin/pages/NetworkTraining/NetworkTraining.vue')
    },
    subscriptions : {
        index : ()=> import('@views/admin/pages/SubscriptionLog/Subscriptionlog.vue'),
        show : ()=> import('@views/admin/pages/SubscriptionLog/UserSubscriptionLog.vue'),
    },
    // logs : {
    //     index : ()=> import('@views/Pages/admin/Task/Index.vue'),
    //     show : ()=> import('@views/Pages/admin/Task/Show.vue'),
    // },
    feedback : {
        index : ()=> import('@views/admin/pages/Feedback/Feedback.vue'),
        show : ()=> import('@views/admin/pages/Feedback/ViewUserFeedback.vue'),
    },
    packages : {
        index : ()=> import('@views/admin/pages/PackageManagement/PackageManagement.vue'),
        edit : ()=> import('@views/admin/pages/PackageManagement/EditPackageManagement.vue')
    },
    admins : {
        adminProfile: () => import('@views/admin/pages/AdminUser/AdminProfile.vue'),
        adminProfileEdit: () => import('@views/admin/pages/AdminUser/ProfileEdit.vue')
    },
    notifications : {
        index : ()=> import('@views/admin/pages/Notification/Notifications.vue'),
    },
};


const routes = {
        path: '/',
        components: {
            default: admin.layout.authenticated,
        },
        children: [
            {
                path: '/admins/dashboard',
                component: admin.dashboard,
                name: 'admin.dashboard',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            /*{
                path: 'datatable-testing',
                component: admin.properties.datatable,
                name: 'admin.properties.datatable',
                meta: { ...meta, requiresAuth: true,permission : null },
            },*/
            {
                path: 'admins/users',
                component: admin.users.index,
                name: 'admin.users.index',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/user/profile/:id',
                component: admin.users.profile,
                name: 'admin.users.profile',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/users',
                component: admin.users.block,
                name: 'admin.users.block',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/profile',
                component: admin.users.admin.profile,
                name: 'admin.users.admin.profile',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/profile/edit',
                component: admin.users.admin.editProfile,
                name: 'admin.users.editProfile',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/user/business',
                component: admin.business.index,
                name: 'admin.users.business.index',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/user/business/block',
                component: admin.business.block,
                name: 'admin.users.business.block',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/job',
                component: admin.job.index,
                name: 'admin.job.index',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/job/show/:id',
                component: admin.job.show,
                name: 'admin.job.show',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/job/candidate/:id',
                component: admin.job.candidate,
                name: 'admin.job.candidate',
                meta: { ...meta, requiresAuth: true,permission : null},
            },
            {
                path: 'admins/category',
                component: admin.category.categoryManagement,
                name: 'admin.category.index',
                meta: { ...meta, requiresAuth: true,permission : null},

            },
            {
                path: 'admins/network/training',
                component: admin.networkTraining.index,
                name: 'admin.networkTraining.index',
                meta: { ...meta, requiresAuth: true,permission : null},

            },
            {
                path: 'admins/subscriptions',
                component: admin.subscriptions.index,
                name: 'admin.subscriptions.index',
                meta: { ...meta, requiresAuth: true,permission : 'admin.subscriptions' }
            },
            {
                path: 'admins/subscription/:id',
                component: admin.subscriptions.show,
                name: 'admin.subscriptions.show',
                meta: { ...meta, requiresAuth: true,permission : 'admin.subscriptions' }
            },
            {
                path: 'admins/feedback-logs',
                component: admin.feedback.index,
                name: 'admin.feedback.index',
                meta: { ...meta, requiresAuth: true,permission : 'admin.feedbacks' }
            },
            {
                path: 'admins/feedback-log/show',
                component: admin.feedback.show,
                name: 'admin.feedback.show',
                meta: { ...meta, requiresAuth: true,permission : 'admin.feedkacks' }
            },
            {
                path: 'admins/packages',
                component: admin.packages.index,
                name: 'admin.packages.index',
                meta: { ...meta, requiresAuth: true,permission : 'admin.packages' }
            },
            {
                path: 'admins/packages/edit',
                component: admin.packages.edit,
                name: 'admin.packages.edit',
                meta: { ...meta, requiresAuth: true,permission : 'admin.packages' }
            },
            {
                path: 'admins/admins',
                component: admin.admins.index,
                name: 'admin.admins.index',
                meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
            },
            {
                path: 'admins/create',
                component: admin.admins.create,
                name: 'admin.admins.create',
                meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
            },
            {
                path: 'admins/edit/:admin',
                component: admin.admins.edit,
                name: 'admin.admins.edit',
                meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
            },
            {
                path: 'admins/:admin',
                component: admin.admins.show,
                name: 'admin.admins.show',
                meta: { ...meta, requiresAuth: true,permission : 'admin.admins' }
            },
            {
                path: 'admins/notifications',
                component: admin.notifications.index,
                name: 'admin.notifications.index',
                meta: { ...meta, requiresAuth: true,permission : null }
            },


        ],
    }
    export default routes;
