<template>
    <div>
        <full-page-header></full-page-header>
        <section class="login-section">
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </div>

</template>
<script>
 const FullPageHeader = () => import('../../views/businessOwner/components/FullPageHeader.vue');
export default {
    created() {
    },
    components: {
        FullPageHeader,
    },
}
</script>
