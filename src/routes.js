import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));






const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    
]
export default routes;