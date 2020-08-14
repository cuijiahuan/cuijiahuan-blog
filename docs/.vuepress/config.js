module.exports = {
    title: 'AnYi\'s blog',
    description: '的个人博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        // ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
        // ['link', { rel: 'manifest', href: '/logo.png' }],
        // ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        // ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar')
    }
};
