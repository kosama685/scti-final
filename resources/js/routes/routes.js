// importing components

import businessOwner from './businessOnwer/public';
import admin from './admin/public';
import user from './user/public';
import userAuthenticate from './user/authenticate';
import adminAuthenticate from './admin/authenticate';
import businessOwnerAuthenticate from './businessOnwer/authenticate';
// building routes & injecting components
const routes = [
    businessOwner,
    admin,
    user,
    adminAuthenticate,
    businessOwnerAuthenticate,
    userAuthenticate,
];

export default routes;
