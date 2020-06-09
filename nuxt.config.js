let dotenv = require('dotenv')
dotenv.config();

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '@assets/css/landing.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/components',
        
        '~/plugins/dropdown',
        '~/plugins/validation',
        '~/plugins/modal'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/toast',
        '@nuxtjs/recaptcha'
    ],
    recaptcha: {
        siteKey: process.env.RECAPTCHA_KEY,
        version: 2,
        size: 'invisible',
        hideBadge: false
    },
    toast: {
        position: 'top-center',
        duration: 1000
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        publicPath: '/assets/',
        
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.md$/,
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            });
        }
    }
}
