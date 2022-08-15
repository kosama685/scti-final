<template>
    <div>
        <register-header></register-header>
        <section class="user-home">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="page-heading">My Training Programs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body ">

                                <div class="row align-items-center">
                                    <div class="col-lg-1 col-md-2 col-12 text-center">
                                        <span class="data-span">Sort By:</span>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <div class="form-group">
                                            <label for="exp">From</label>
                                            <date-picker v-model="from" valueType="format"></date-picker>


                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <div class="form-group">
                                            <label for="exp">To</label>
                                            <date-picker v-model="to" valueType="format"></date-picker>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 col-12">
                                        <button type="button" @click='getNetworkingProgram()' class="green-btn w-100 blue-btn">
                                            apply/clear
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 p-0">
                                        <div class="maain-tabble table-responsive">
                                            <table class="table zero-configuration">
                                                <thead>
                                                <tr>
                                                    <th>S.no</th>
                                                    <th>Program Id</th>
                                                    <th>Program Title</th>
                                                    <th> Date</th>
                                                    <th>action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr :key="index"
                                                    v-for="(networktraining,index) in networktrainings.data">
                                                    <td>{{ index }}</td>
                                                    <td>{{ networktraining.id }}</td>
                                                    <td>{{ networktraining.program_name }}e</td>
                                                    <td>{{ formatDate(networktraining.date) }}</td>
                                                    <td>
                                                        <div class="btn-group mr-1 mb-1">
                                                            <button type="button" class="btn  btn-drop-table btn-sm"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false"><i
                                                                class="fa fa-ellipsis-v"></i>
                                                            </button>
                                                            <div class="dropdown-menu" x-placement="bottom-start">
                                                                <router-link
                                                                    class="dropdown-item"
                                                                    :to="{name: 'user.trainingProgram.view',params: {id: networktraining.id}}"><i
                                                                    class="fa fa-eye"></i>View
                                                                </router-link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof networktrainings.data != 'undefined' && networktrainings.data.length == 0">
                                                    <td colspan="8">
                                                        No Data Available
                                                    </td>
                                                </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <inner-page-footer></inner-page-footer>

    </div>
</template>
<script>
const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
const RegisterHeader = () => import('../../components/RegisterHeader.vue');

export default {
    data() {
        return {
            networktrainings: {},
            editnetworktrainings: {},
            entries: 10,
            from: '',
            to: '',
        };
    },
    async created() {
        await this.getNetworkingProgram();

    },
    components: {
        InnerPageFooter,
        RegisterHeader,
    },
    methods: {
        async getNetworkingProgram(page = 1) {
            if(this.to == null)
            {
                this.to = '';
                this.from = '';

            }
            let res = (await axios.get('/api/admin/networktraining?page=' + page + '&entries=' + this.entries + '&from=' + this.from + '&to=' + this.to));
            this.networktrainings = res.data;
            console.log(this.networktrainings);
        },

    }
}
</script>
