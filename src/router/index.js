import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import CountryDetail from '@/components/CountryDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'All Countries',
            component: Home
        },
        {
            path: '/country/:name',
            name: 'Country Detail',
            component: CountryDetail
        }
    ],
    linkActiveClass: 'active',
    mode: 'history'
})
