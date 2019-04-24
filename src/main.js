import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(ElementUi);
new Vue({
  render: h => h(App),
}).$mount('#app')
