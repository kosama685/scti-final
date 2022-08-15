<template>
    <section class="footer">

        <div class="container-fluid p-0">
            <div class="row">

                <div class="col-lg-4 col-md-12 col-12 d-flex justify-content-end position-relative">
                    <div class="footer-left-wrap">
                        <img :src="`${base_url}/assets/user/images/footer-logo.png`" alt="" class="footer_logo">
                        <ul class="social_links">
                            <li>
                                <a href="https://www.facebook.com/ProfessionNet/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ProfessionNet"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                           <!--  <li>
                                <a href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                            </li> -->
                            <li>
                                <a href="https://www.instagram.com/professionnetuk/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                    <img :src="`${base_url}/assets/user/images/black-dots.png`" class="dots d1" alt="" srcset="">
                    <img :src="`${base_url}/assets/user/images/gray-dots.png`" class="dots d2" alt="" srcset="">
                </div>
                <div class="col-lg-8 col-md-12 col-12">
                    <div class="footer-wrapper">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <p class="footer_title">
                                    Quick Links
                                </p>
                                <ul class="footer_links">
                                    <li>
                                        <router-link :to="{name: 'user.users.index'}">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'user.about.index'}">About Us</router-link>
                                    </li>
                                    <!-- <li>
                                        <a href="#">Services</a>
                                    </li> -->
                                    <!-- <li>
                                        <router-link :to="{name:'user.contact.index'}">Contact Us</router-link>
                                    </li> -->
                                     <li>
                                        <router-link :to="{name:'user.about.privacy'}">Privacy Policy</router-link>
                                    </li>
                                     <li>
                                        <router-link :to="{name:'user.about.chain'}">Supply chain</router-link>
                                    </li>
                                     <li>
                                        <router-link :to="{name:'user.about.termConditions'}">Term and conditions</router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- <div class="col-md-6 col-12">
                                <p class="footer_title">
                                    Jobs Category
                                </p>
                                <ul class="footer_links">
                                    <li v-for="category in categories">
                                        <a href="#">{{category.category_name}}</a>
                                    </li>
                                </ul>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="separator-1"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p class="copyright">Copyright @ 2020 SCTI Jobs. All rights reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>


    </section>
</template>
<script>
    export default {
        data() {
            return{
                categories: {}
            }
        },
        async created() {
            await this.getCategory();
        },
        methods: {
            async getCategory() {
                this.categories = (await axios.get('/api/admin/category')).data.data;
            },
        }
    }
</script>