const themeConfig = require('./config/theme/');

module.exports = {
  title: "",
  description: '',
  dest: 'blog',
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
    // [
    //   require('./plugins/KanBanNiang'),
    //   {
    //     theme: ['blackCat'],
    //     width: 200,
    //     height: 400,
    //     modelStyle: {
    //       position: 'fixed',
    //       right: '70px',
    //       bottom: '50px',
    //       opacity: '0.9' 
    //     },
    //     messageStyle: {
    //       position: 'fixed',
    //       right: '70px',
    //       bottom: '380px'
    //     },
    //     btnStyle: {
    //       bottom: '60px',
    //       right: '80px'
    //     }
    //   }
    // ],
    // [
    //   require('./plugins/BgMusic'),
    //   {
    //     audios: [
    //       {
    //         name: '我再没见过 像你一般的星空',
    //         artist: 'Seto',
    //         url: 'https://assets.smallsunnyfox.com/music/Seto我再没见过像你一般的星空.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/1.png'
    //       },
    //       {
    //         name: '萤火之森',
    //         artist: 'CMJ',
    //         url: 'https://assets.smallsunnyfox.com/music/CMJ萤火之森.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/2.png'
    //       }
    //     ]
    //   }
    // ],
    // 趣味标题插件
    // [
    //   'dynamic-title',
    //   {
    //      showIcon: '/favicon.ico',
    //      showText: '(/≧▽≦/)咦！又好了！',
    //      hideIcon: '/failure.ico',
    //      hideText: '(●—●)喔哟，崩溃啦！',
    //      recoverTime: 2000,
    //   },
    // ],
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ]
  ]
}  