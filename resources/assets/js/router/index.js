import VueRouter from 'vue-router'
import Store from '../store'
import jwt from '../util/storage/jwt'

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('../components/pages/Home'),
        meta:{}
    },
    {
        path: '/about',
        component: require('../components/pages/About'),
        meta:{}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('../components/posts/post'),
        meta:{}
    },
    {
        path: '/register',
        name: 'register',
        component: require('../components/register/register'),
        meta:{}
    },
    {
        path: '/register/confirm',
        name: 'registerConfirm',
        component: require('../components/register/confirm'),
        meta:{}
    },
    {
        path: '/login',
        name: 'login',
        component: require('../components/login/login'),
        meta:{}
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('../components/user/profile'),
        meta:{requiresAuth: true}
    },
]

const router =  new VueRouter({
    routes
})

// 判断用户是否登陆
router.beforeEach((to,from,next)=>{
    let isLogin = jwt.getToken();
    if (to.meta.requiresAuth) {
        if (!isLogin) {
            return next('login')
        }
    } else {
        if (to.name == 'login' && isLogin) {
            return next('home')
        }
    }
    return next()
})

export default router
