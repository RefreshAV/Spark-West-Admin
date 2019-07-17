import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Event from './components/Event.vue'

Vue.use(Router)

const routes = [

    {
        path: "/",
        component: Home
    },
    {
        path: "/event/:id",
        component: Event
    }

]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})