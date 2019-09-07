import Vue from 'vue'
import Vuex from 'vuex'
import { USER_OPTIONS } from "./usable_datas/global_variables";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        user: {
            type: '',
            lang: 'fr'
        },
        darkTheme: false,
        componentDisplayed: '',
        options: USER_OPTIONS
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