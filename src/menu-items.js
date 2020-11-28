export default {
    items: [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'feather icon-home',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }]
        },
        {
            id: 'navigation',
            title: 'Activity',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Authorization',
                    type: 'item',
                    url: '',
                    icon: 'feather icon-home',
                },
                {
                    id: 'dashboard',
                    title: 'ACharging Sessions',
                    type: 'item',
                    url: '',
                    icon: 'feather icon-home',
                }
            ]
        },
        
        {
            id: 'ui-forms',
            title: 'Asset',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Charge point',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'charging Zone',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                },
                {
                    id: 'bootstrap',
                    title: 'Location',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                },
                {
                    id: 'bootstrap',
                    title: 'Location Images',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/tables/bootstrap'
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'CRM',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Users',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
                {
                    id: 'maps',
                    title: 'RFID Tags',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                }
            ]
        },
           
    ]
}