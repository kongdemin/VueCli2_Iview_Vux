import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Echarts from 'echarts-vue'
Echarts.install(Vue)

Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
