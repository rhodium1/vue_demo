import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Crm';
import DynamicTitle from './components/DynamicTitle';
Vue.use(VueRouter);
const routes = [
    {
        path: '/', component: Home, children:[
            { 
                path: '/crm-manager', 
                component: DynamicTitle ,
                meta:{
                    title: "crm管理"
                },
                
            },
            {
                path: "public-project",
                component: DynamicTitle,
                meta:{
                    title: '公海池'
                }
            },
        ],
        meta:{
            title: "Home"
        }
    },
    
];
const router = new VueRouter({routes});

export default router;