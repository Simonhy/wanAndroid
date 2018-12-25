import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import lefthome from '../components/login/lefthome'




Vue.use(VueRouter)
const routes = [

    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/lefthome',
        component: lefthome
    },
    { path: '/Login', component: Login },

]
const router = new VueRouter({
    routes
})

export default router