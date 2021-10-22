const themeConfig = require('./config/theme/')

module.exports = {
  title: "柚宝",
  description: '木由',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 趣味标题插件
    [
      'dynamic-title',
      {
         showIcon: '/favicon.ico',
         showText: '(/≧▽≦/)咦！又好了！',
         hideIcon: '/failure.ico',
         hideText: '(●—●)喔哟，崩溃啦！',
         recoverTime: 2000,
      },
    ],
  ] 
}  