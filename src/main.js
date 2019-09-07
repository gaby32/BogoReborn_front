import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import router from './router'
import Axios from 'axios'
const opts = {  };
Vue.use(vuetify);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
new Vue({
    el: '#app',
    router,
    vuetify: new vuetify(opts),
    store,
    render: h => h(App)
});
