import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';

sync(store, router)

// Globally register bootstrap-vue components
Vue.use(BootstrapVue);

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
