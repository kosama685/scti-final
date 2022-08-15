<template>
    <div>
        <top-navbar></top-navbar>
        <sidebar :sidebarItems="sidebarItems"></sidebar>
        <change-password :key="componentKey"></change-password>
        <div class="app-content content dashboard">
            <transition name="fade">
                <router-view :key="$route.fullPath"></router-view>
            </transition>

        </div>
    </div>
</template>
<script>
    import sidebarItems from '../../views/admin/components/sideBarItems.js';
     const TopNavbar = () => import('../../views/admin/components/TopNavbar.vue');
     const Sidebar = () => import('../../coreFiles/components/Sidebar/Sidebar.vue');
    const ChangePassword = () => import('../../views/admin/components/ChangePassword.vue');

export default {
    data() {
        return {
            componentKey: 0,
            sidebarItems: sidebarItems
        };
    },
    components: {
        TopNavbar,
        Sidebar,
        ChangePassword
    },
    // created(){
    //     window.location.reload();
    // }
}

</script>
