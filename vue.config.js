// vue.config.js
module.exports = {
  outputDir: 'docs',
  publicPath:"/greenart/",
  pwa: {
    name: 'My PWA App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    manifestOptions: {
      background_color: '#ffffff'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
}
