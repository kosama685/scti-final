<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>
                                                <router-link :to="{name:'Users'}"><i class="fa fa-angle-left"></i>Users
                                                </router-link>
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="content-header">
                                        <h2>Blocked Users Listing</h2>
                                    </div>

                                    <div class="top mt-0 mt-md-5">

                                        <div class="row">
                                            <div class="col-12">
                                                <label for="">sort by :</label>
                                            </div>
                                        </div>
                                        <div class="row align-items-center">
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                                                <date-picker v-model="from" valueType="format"></date-picker>
                                            </div>
                                            <div class=" col-xl-2 col-md-4 col-sm-6 col-12 ">
                                                <date-picker v-model="to" valueType="format"></date-picker>
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-12">
                                                <button @click='getUsers()' type="button" class="green-btn w-100">
                                                    apply/clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                            <tr>
                                                <th>s.no</th>
                                                <th>User ID</th>
                                                <th>Full name</th>
                                                <th>Registration Date</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr :key="index" v-for="(user,index) in users.data">
                                                <td>0{{ index }}</td>
                                                <td>{{ user.id }}</td>
                                                <td>{{ user.name }}</td>
                                                <td>{{ formatDate(user.created_at) }}</td>
                                                <td>
                                                    <div class="btn-group mr-1 mb-1">
                                                        <button type="button" class="btn btn-drop-table btn-sm"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false"><i class="fa fa-ellipsis-v"></i>
                                                        </button>
                                                        <div class="dropdown-menu" x-placement="bottom-start">
                                                            <router-link class="dropdown-item"
                                                                         :to="{name: 'admin.users.profile', params:{id: user.id}}">
                                                                <i class="fa fa-user-circle"></i>View Profile
                                                            </router-link>
                                                            <router-link class="dropdown-item"
                                                                         :to="{name: 'admin.subscriptions.show', params: {id: user.id}}">
                                                                <i class="fa fa-eye"></i>View Subscription Program
                                                            </router-link>
                                                            <a class="dropdown-item" data-toggle="modal"
                                                               href="#blockPopup"
                                                               @click="BlockPopup(index)"><i class="fa fa-undo"></i>UN
                                                                Block</a>
                                                        </div>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr v-if="typeof users.data != 'undefined' && users.data.length == 0">
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
            </section>
        </div>

        <block-popup @delete="blockUser" :successButtonText="successButtonText" :primary-key="primaryKey"
                     table="unblock-user" :message="message"></block-popup>
    </div>
</template>

<script>
const BlockPopup = () => import('../../components/Block.vue');
export default {
    inject: ['formatDate'],
    data() {
        return {
            users: {},
            search: '',
            entries: 10,
            status: 0,
            message: '',
            selectedIndex: undefined,
            primaryKey: undefined,
            successButtonText: '',
            to: '',
            from: '',
            user_role: 'businessOwner',
        };
    },
    components: {
        BlockPopup
    },
    async created() {
        await this.getBlockedUsers();
    },
    methods: {
        async getBlockedUsers(page = 1) {
            this.users = (await axios.get('/api/admin/block?page=' + page + '&entries=' + this.entries + '&from=' + this.from + '&to=' + this.to + "&user_role=" + this.user_role)).data;
            console.log(this.users);
        },

        BlockPopup(index) {

            this.primaryKey = this.users.data[index].id;
            this.selectedIndex = index;
            this.message = 'Are you sure! do you want to Un-block this User ?';
            this.successButtonText = 'Yes';
        },
        blockUser(block) {
            this.users.data.splice(this.selectedIndex, 1);
        },
    }
}
</script>
