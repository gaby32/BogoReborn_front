import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'
import store from './store'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(App)
});
