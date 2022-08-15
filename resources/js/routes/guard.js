import router from './index.js';

function isLoggedIn() {
    return localStorage.getItem('access-token');
}

function isAdminLoggedIn() {
    return localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'admin';
}

function isBusinessLoggedIn() {
    return localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'businessOwner';
}

function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'user';
}

//let userPermissions = isAdminLoggedIn()?[null,..._.map(window.Laravel.user.permissions,'value')]:[];
// check authentication
router.beforeEach((to, from, next) => {
    
    if (to.name.includes('admin.')) {
        // validating non login pages.
        if (isAdminLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next({name: 'admin.dashboard'});
            } else {
                // console.log(userPermissions,to.meta.permission);
                return next({name: 'admin.404'});
            }
            return;
        }
        // validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            return next({name: 'admin.auth.login'});
        }
    } else if (to.name.includes('businessOwner.')) {
        // validating non login pages.
        if (isBusinessLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                console.log(to);
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next({name: 'businessOwner.dashboard'});
            } else {
                // console.log(userPermissions,to.meta.permission);
                return next({name: 'admin.404'});
            }
            return;
        }
        // validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            return next({name: 'businessOwner.auth.login'});
        }
    } else if (to.name.includes('user.')) {
        // validating non login pages.
        if (isUserLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                console.log(to);
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next({name: 'user.users.dashboard'});
            } else {
                return next({name: 'admin.404'});
            }
            return;
        }
        // validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            return next({name: 'user.users.index'});
        }
    } else {
        // validating non login pages.
        if (isLoggedIn()) {
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next({name: 'web.home'});
            } else {
                return next();
            }
            return;
        }
        // validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            return next({name: 'web.home'});
        }
    }
    return next();


});
