
import meta from '../meta';
const admin = {
    layout: {
        fullPage: () => import('../../Layouts/Admin/FullPage.vue').then(m => m.default),
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
        edit:() => import('@views/admin/pages/Users/EditUser.vue'),
    },
};


const routes = {
        path: '/',
        components: {
            default: admin.layout.fullPage,
        },
        children: [
            {
                path: 'admins/login',
                component: admin.auth.login,
                name: 'admin.auth.login',
                meta: { ...meta, loggedInCan: false },
            },

            //  {
            //     path: '404',
            //     name: 'admin.404',
            //     component: admin.error404,
            //     meta: { ...meta, requiresAuth: true,permission : null },
            // },
            // {
            //     path: '*',
            //     redirect: { name: 'admin.404',permission : null }
            // },

        ],
    }
    export default routes;
