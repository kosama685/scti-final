const sidebarItems = [
    {
        componentName: 'admin.dashboard',
        iconClasses: 'fa fa-home',
        name: 'Dashboard',
    },
    {
        componentName: 'AdminHome',
        iconClasses: 'fa fa-user-circle',
        name: 'User Management',
        children: [
        	{
                componentName: 'admin.users.index',
                iconClasses: '',
                name: 'User Listing',
            },
            {
                componentName: 'admin.users.business.index',
                iconClasses: '',
                name: 'Business Owner Listing',
            },

        ],
    },

     {
        componentName: 'admin.job.index',
        iconClasses: 'fa fa-clipboard-list',
        name: 'Job Listing',
    },
     {
        componentName: 'admin.category.index',
        iconClasses: 'fa fa-clone',
        name: 'Category Management',
    },
    //  {
    //     componentName: 'admin.networkTraining.index',
    //     iconClasses: 'fa fa-credit-card',
    //     name: 'Network & Training',
    // },
    {
        componentName: 'admin.subscriptions.index',
        iconClasses: 'fa fa-th-list',
        name: 'Subscription Log',
    },
    {
        componentName: 'admin.packages.index',
        iconClasses: 'fa fa-window-maximize',
        name: 'Package Management',
    },
    // {
    // 	componentName : 'PaymentLog',
    // 	iconClasses : 'fa fa-question-circle',
    // 	name : 'Payment Log',
    // },
    {
    	componentName : 'admin.feedback.index',
    	iconClasses : 'fa fa-comment',
    	name : 'Feedback',
    },


];
export default sidebarItems;
