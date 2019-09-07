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

let theme = this.$store.getters.isDarkTheme() ? 'dark' : 'light';
const APP_ICONS_SRC = {
    regionIcon: `src/assets/icons/map-marker_${theme}.png`,
    cityIcon: `src/assets/icons/home-city_${theme}.png`,
    userIcon: `src/assets/icons/account-multiple_${theme}.png`,
    eventIcon: `src/assets/icons/calendar_${theme}.png`
};

new Vue({
    el: '#app',
    router,
    vuetify: new vuetify(opts),
    store,
    icons: APP_ICONS_SRC,
    render: h => h(App)
});
