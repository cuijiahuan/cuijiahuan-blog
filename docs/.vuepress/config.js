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
  themeConfig: {
    mode: 'dark',
    modePicker: true,
    valineConfig: {
      appId: 'zjR4dMTpvo0zEJOnkSqXinYX-gzGzoHsz',
      appKey: 'cXH8sBPviOXPfM7VGiQYeMxY',
    }

  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  