import Vue from 'vue';

const NoRecord = () => import('@core/components/NoRecord.vue');
const Confirm = () => import('@core/components/Popups/Confirm.vue');
Vue.mixin({
    components: {
        NoRecord,
        Confirm,
    },
    computed: {
      userPermissions() {
        // return _.map();
          return ;
       // return this.$user.permissions?_.map(this.$user.permissions,'value'):[];
      },
      routeParams(){
        let {params} = this.$route;
        return params;
      },
    },
    methods: {
        buildFormData(formData, data, parentKey) {

            if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
                Object.keys(data).forEach(key => {
                    this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
                });
            } else {
                const value = data == null ? '' : data;

                formData.append(parentKey, value);
            }
        },
        formatDate(date, format = 'DD MMMM YYYY') {
            return this.$moment(date).format(format);
        },
        togglePasswordType(index) {
            console.log(this.$refs);
            let field = Object.values(this.$refs)[0][index];
            let type = field.getAttribute('type');
            let buttonIcon = Object.values(this.$refs)[0][index+1];
            console.log(type);
            if (type == 'text') {
                buttonIcon.setAttribute('class','eye-pass fa fa-eye')
                field.setAttribute('type', 'password');
            } else {
                buttonIcon.setAttribute('class','eye-pass fa fa-eye-slash')
                field.setAttribute('type', 'text');
            }
        },
        getPasswordType(ref) {
            let field = this.$refs[ref];
            if (typeof field != 'undefined') {

                return field.getAttribute('type');
            }
        },
        addRouteQuery(newQuery) {

            this.$router.push({ query: newQuery }).catch(() => {});
        },
        serialNumber(variable, index = 0) {
            let starting = this[variable].per_page * (this[variable].current_page - 1);
            index++;
            return starting + index;
        }
    }
})
