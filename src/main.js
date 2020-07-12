
import router from './router'
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import VCharts from 'v-charts'

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VCharts);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
