import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home';
import pageA from './components/pageA';
import pageB from './components/pageB';
Vue.use(VueRouter);
const routes = [
    {
        path: '/', component: Home, children:[
            { path: '/pageB', component: pageB },
            {  path:'/pageA', component: pageA},
        ],
        meta:{
            data:'data'
        }
    },
    {
        path:'/foo', component:pageA
    },
    
];
const router = new VueRouter({routes});

export default router;