import VueRouter from 'vue-router'

let routes = [
    {
        path: '/',
        component: require('../components/pages/Home')
    },
    {
        path: '/about',
        component: require('../components/pages/About')
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('../components/posts/post')
    },
    {
        path: '/register',
        name: 'register',
        component: require('../components/register/register')
    },
    {
        path: '/register/confirm',
        name: 'registerConfirm',
        component: require('../components/register/confirm')
    },
]

export default new VueRouter({
    routes
})
