import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login'
import Home from './pages/home'
Vue.use(Router);

let router = new Router({
routes : [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/login',
        name: 'Login'
    },
    {

    }
]
});
export default router