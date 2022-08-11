export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Hiroyasuのポートフォリオサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '新妻広康 (Niitsuma Hiroyasu) のポートフォリオサイト',
      },
      { name: 'theme-color', content: '#0fbcf9' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'og:title',
        content: '新妻広康 (Niitsuma Hiroyasu) のポートフォリオサイト',
      },
      {
        name: 'og:site_name',
        content: '新妻広康 (Niitsuma Hiroyasu) のポートフォリオサイト',
      },
      {
        name: 'og:description',
        content: '新妻広康 (Niitsuma Hiroyasu) のポートフォリオサイト',
      },
      {
        name: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2FCyan%20Twitter%20Card%20v1.0.png?alt=media&token=5541cb6a-3ab4-422c-8208-40a627733a88',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
    bodyAttrs: {},
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {},
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/scss/transition.scss',
    '~/assets/styles/css/imports.css',
    '~/assets/styles/css/global.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fb_init.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/style-resources'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
  /**
   * Style modules
   */
  styleResources: {
    // your settings here
    sass: [],
    scss: [
      './assets/styles/scss/color.scss',
      './assets/styles/scss/variable.scss',
      './assets/styles/scss/classes.scss',
      './assets/styles/scss/responsive.scss',
    ],
    less: [],
    stylus: [],
  },
}
