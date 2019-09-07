import Vue from 'vue'
import Vuex from 'vuex'
import { user_type_datas_generator } from 'usable_datas'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        user: {
            type: '',
            lang: ''
        },
        darkTheme: false,
        componentDisplayed: '',
        options: user_type_datas_generator.getOptions()
    },
    mutations: {

    },
    actions: {
        isDarkTheme() {
            return this.state.darkTheme
        }
    },
    getters: {
        userType: this.state.user.type,
        userLang: this.state.user.lang,
        toolBarOptions: this.state.options
    }
})