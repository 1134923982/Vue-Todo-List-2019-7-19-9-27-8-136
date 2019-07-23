import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main'
import Home from '../components/Home'
import TodoLists from '../components/TodoLists'
import MyProfile from '../components/MyProfile'


Vue.use(Router)


const routes = [
    {path: '/', name: 'main', component: Main},
    {
        path: '/index', name: 'index', component: Home,
        children: [
            {path:'/todoLists', name:'todoLists', component: TodoLists },
            {path:'/myProfile', name:'myProfile', component: MyProfile }
        ]
    },

]

const router = new Router(
    {
        routes
    }
)

export default router;

