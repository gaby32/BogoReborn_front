import Vue from 'vue'
import Vuex from 'vuex'
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
        options: {
            option1: 'opt1',
            option2: 'opt2',
            option3: 'opt3'
        }
    },
    mutations: {

    },
    actions: {
        isDarkTheme() {
            return this.state.darkTheme
        }
    },
    getters: {
        userType: state => { return state.user.type },
        userLang: state => { return state.user.lang },
        toolBarOptions: state => { return state.options }
    }
})