import Vue from 'vue'
import Router from 'vue-router'
import login from './pages/login'
import home from './pages/home'
import register from './pages/register'
Vue.use(Router);

let router = new Router({
routes : [
    {
        path: '/',
        name: 'home'
    },
    {
        path: '/login',
        name: 'login'
    },
    {
        path: '/register',
        name: 'register'
    }
]
});
export default router