const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 暗色模式
  mode: 'auto',
  modePicker: true,
  // 评论
  valineConfig: {
    appId: 'zjR4dMTpvo0zEJOnkSqXinYX-gzGzoHsz',// your appId
    appKey: 'cXH8sBPviOXPfM7VGiQYeMxY', // your appKey
  }
})