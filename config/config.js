export default {
    base: '/my-webpage/dist/',
    publicPath: '/my-webpage/dist/',
    history: 'hash',
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './Welcome'
            },
            {
                path: '/welcome',
                component: 'Welcome'
            },
            {
                path: '/contact',
                component: 'Contact'
            },
            {
                path: '/projects',
                component: 'Projects'
            },
        ]
    }],

    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
        'umi-plugin-gh-pages',
    ],
}