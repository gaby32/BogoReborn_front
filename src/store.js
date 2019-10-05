import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        user: {
            type: 'admin',
            lang: 'fr'
        },
        config: {
            darkTheme: false
        },
        componentDisplayed: ''
    },
    mutations: {
        changeState(state, newState) {
            state.status = newState;
        }
    },
    actions: {

    },
    getters: {
        user: state => { return state.user },
        theme: state => { return (state.config.darkTheme) ? 'dark' : 'light' }
    }
})