import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(BootstrapVue);
Vue.use(Vue2TouchEvents);
Vue.config.productionTip = false;
//
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://192.168.11.166:133/public';

Vue.router = router;

// Vue Auth
//https://github.com/websanova/vue-auth/issues/208
Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'roles'
});
//
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
