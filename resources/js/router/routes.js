export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue'),
    },
    {
        path: '/hosting/',
        name: 'hosting',
        component: () => import('../pages/hosting.vue')
    },
    {
        path: '/server/',
        name: 'server',
        component: () => import('../pages/server.vue')
    },
];