<template>
    <div class="d-flex align-items-center col-md-12 col-sm-12">
        <div  class="col-sm-12 col-md-6">
            <div v-if="showEntries" class="dataTables_length" id="DataTables_Table_0_length">
                <label class="d-flex align-items-center">Show
                    <select v-model="entries" @change="onChange" name="entries" aria-controls="DataTables_Table_0" class="form-control form-control-sm w-50">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </label></div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div id="DataTables_Table_0_filter" class="dataTables_filter for-search">
                <label><input v-model="searchValue" spellcheck="true" type="search" class="form-control form-control-sm" :placeholder="placeholder" aria-controls="DataTables_Table_0"></label>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    props: {
        placeholder: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: 'Search...'
        },
        showEntries: {
            type: Boolean, // String, Number, Boolean, Function, Object, Array
            required: true,
            default: 'Search...'
        }
    },
    data() {
        return {
            searchValue: '',
            entries : 10,
        };
    },
    watch: {
        searchValue: function(val, oldVal) {
            this.handleSearch();
        },
        entries(val){
            console.log('oooo'+val);
            this.SET_ENTRIES(val);
        }
    },
    created() {
        this.handleSearch = _.debounce(this.handleSearch, 500);
    },
    computed: {
        // ...mapState('public',['search']),
    },
    methods: {
        ...mapMutations('admin', ['SET_SEARCH','SET_ENTRIES']),
        handleSearch() {
            this.SET_SEARCH(this.searchValue);
        },
         onChange(event) {
            console.log(event.target.value)
        }
    }

}

</script>
