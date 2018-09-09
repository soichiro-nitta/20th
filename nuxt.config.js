module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '20th',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // { rel: 'icon', href: '/icon.png' },
      // { rel: 'apple-touch-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Share|Averia+Serif+Libre|Shadows+Into+Light|M+PLUS+Rounded+1c'
      }
    ]
  },
  css: ['~/assets/scss/default.scss'],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#333',
    height: '10px'
  },
  /*
  ** nuxt-modules
  */
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    'nuxt-device-detect',
    ['nuxt-sass-resources-loader', ['~/assets/scss/variable.scss']]
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['gsap'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
