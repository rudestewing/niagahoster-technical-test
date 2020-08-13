export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue'),
    },
    {
        path: '/hosting/',
        name: 'profile',
        component: () => import('../pages/hosting.vue')
    },
    {
        path: '/server/',
        name: 'profile',
        component: () => import('../pages/server.vue')
    },
];