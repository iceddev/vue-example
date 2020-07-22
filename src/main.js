import Vue from 'vue'
import App from './App.vue'
import Login from './Login.vue';
import OauthRedir from './OauthRedir.vue';
import Home from './Home.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueMaterial)

const routes = [
  {path: '/', component: Login},
  {path: '/home', component: Home},
  {path: '/oauthtoken/:token', component: OauthRedir}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});