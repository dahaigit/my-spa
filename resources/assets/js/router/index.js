import VueRouter from 'vue-router'
import Store from '../store'
import jwt from '../util/storage/jwt'

let routes = [
    {
        path: '/',
        name: '/',
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
        component: require('../components/user/profileWrapper.vue'),
        children:[
            {
                path: '',
                name: 'profile',
                component: require('../components/user/profile'),
                meta:{requiresAuth: true},
            },
            {
                path: '/edit-profile',
                name: 'edit.profile',
                component: require('../components/user/editProfile'),
                meta:{requiresAuth: true},
            }
        ]
    },
]

const router =  new VueRouter({
    routes
})

// 判断用户是否登陆
router.beforeEach((to,from,next)=>{
    let isLogin = jwt.getToken();
    if (!isLogin && jwt.getRefreshToken()){
        // 换取新token
        Store.dispatch('refreshRequest').then(response=>{
            return next()
        })
        return
    }
    if (to.meta.requiresAuth) {
        if (!isLogin) {
            return next('login')
        }
    } else {
        if (to.name == 'login' && isLogin) {
            return next('/')
        }
    }
    return next()
})

export default router
