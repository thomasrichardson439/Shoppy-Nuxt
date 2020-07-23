const dotenv = require('dotenv')
dotenv.config()

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - Shoppy',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Shoppy is an all-in-one payment processing and e-commerce solution. Accept payments, sell digital products from your own and more, do it all with a single platform.'
            },
            {
                hid: 'ogtitle',
                property: 'og:title',
                content: 'Shoppy, Ecommerce Made Simple'
            },
            {
                hid: 'ogurl',
                property: 'og:url',
                content: 'https://shoppy.gg/'
            },
            {
                hid: 'ogimage',
                property: 'og:image',
                content: 'https://shoppy.gg/images/apple-touch-icon-180x180.png'
            },
            {
                hid: 'ogdescription',
                property: 'og:description',
                content: 'Shoppy is an all-in-one payment processing and e-commerce solution. Accept payments, sell digital products from your own and more, do it all with a single platform.'
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
    css: ['@assets/css/_landing.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/components',
        '~/plugins/axios',
        '~plugins/vue-awesome.js',
        '~/plugins/dropdown',
        { src: '~plugins/vue-slider.js', ssr: false },
        { src: '~/plugins/validation', ssr: false },
        { src: '~/plugins/modal', ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        // Doc: https://www.npmjs.com/package/@nuxtjs/moment
        '@nuxtjs/moment',
        ['@nuxtjs/pwa', { workbox: false, meta: false, manifest: false, oneSignal: false }]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/toast',
        '@nuxtjs/recaptcha',
        'cookie-universal-nuxt'
    ],
    recaptcha: {
        siteKey: '6LdbxFEUAAAAAO6z5QGFO_Yk1CUpS_a2h2uo74oD',
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
    axios: {
        headers: {
            common: {
                Accept: 'application/json'
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        publicPath: '/assets/',

        transpile: [
            'showdown',
            'tailwindcss/ui',
            'raw-loader',
            'vue-code-highlight',
            'dotenv',
            'vee-validate',
            /^vue-awesome/
        ],
        postcss: {
            preset: {
                features: {
                    // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
                    "focus-within-pseudo-class": false
                }
            }
        },

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
            })
        }
    }
}
