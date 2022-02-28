import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
