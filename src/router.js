import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Auth from "./components/Auth.vue"
import Home from './components/Home.vue'
import Event from './components/Event.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        // {
        //     path: "*",
        //     redirect: "/"
        // },
        {
            path: "/login",
            name: 'login',
            component: Auth
        },
        {
            path: "/",
            component: Home,
            name: 'home',
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/event/:id",
            component: Event,
            name: 'event',
            meta: {
                requiresAuth: true
            }
        }

    ]
})

router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    firebase.auth().onAuthStateChanged((user) => {
        if (requiresAuth && !user) {
            next('Login')
        } else if (!requiresAuth && user) {
            next()
        } else {
            next()
        }
    })
})

export default router