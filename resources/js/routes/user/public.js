import meta from '../meta';

const user = {
    layout: {
        fullPage: () => import('../../Layouts/User/FullPage.vue').then(m => m.default),
        authenticated: () => import('../../Layouts/User/Master.vue').then(m => m.default)
    },
    auth: {
        login: () => import('@views/user/auth/Login.vue'),
        register: () => import('@views/user/auth/Register.vue'),
    },
    users: {
        index: () => import('@views/user/pages/index.vue'),
    },
    about:{
        index: () => import('@views/user/pages/aboutUs/index.vue'),
        privacy: () => import('@views/user/pages/aboutUs/privacy_policy.vue'),
        chain: () => import('@views/user/pages/aboutUs/supply_chain.vue'),
        termConditions: () => import('@views/user/pages/aboutUs/term_conditions.vue'),
    },
    faq:{
        index: () => import('@views/user/pages/Faq/index.vue')
    },

    contact:{
        index: () => import('@views/user/pages/contactUs.vue')
    }

    // error404 : ()=> import('@views/Pages/admin/Errors/404.vue'),
    // dashboard : ()=> import('@views/Pages/admin/BusinessDashboard.vue'),
};
const routes = {
    path: '/',
    components: {
        default: user.layout.fullPage,
    },
    children: [
        {
            path: '/user/welcome',
            component: user.users.index,
            name: 'user.users.index',
            meta: {...meta, loggedInCan: false}
        },
        {
            path: '/user/login',
            component: user.auth.login,
            name: 'user.auth.login',
            meta: {...meta, loggedInCan: false}
        },
      
        {
            path: '/user/register',
            component: user.auth.register,
            name: 'user.auth.register',
            meta: {...meta, loggedInCan: false}
        },
        {
            path: '/user/about-us',
            component: user.about.index,
            name: 'user.about.index',
            meta: {...meta, loggedInCan: false}
        },
        {
            path: '/user/faq',
            component: user.faq.index,
            name: 'user.faq.index',
            meta: {...meta, loggedInCan: false}
        },
        // {
        //     path: '/user/contact-us',
        //     component: user.contact.index,
        //     name: 'user.contact.index',
        //     meta: {...meta, loggedInCan: false}
        // },
        {
            path: '/user/privacy-policy',
            component: user.about.privacy,
            name: 'user.about.privacy',
            meta: {...meta, loggedInCan: false}
        },
        {
            path: '/user/supply-chain',
            component: user.about.chain,
            name: 'user.about.chain',
            meta: {...meta, loggedInCan: false}
        },
        {
            path: '/user/term-conditions',
            component: user.about.termConditions,
            name: 'user.about.termConditions',
            meta: {...meta, loggedInCan: false}
        },
    ]
}

export default routes;
// contact.index

