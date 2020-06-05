/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
        extend: {
            colors: {
                darkgray: '#343f44',
                whitegray: '#e5eff5',
                middarkgray: '#54666d',
                bluely: '#15212a',
                darkbluely: '#121c23',
                shoppy: '#1c2360',
                answers: '#d948b0',
                ecommerce: '#1a1e28',
                lightpink: '#f750ff'
            }
        }
    },
    variants: {
        opacity: ['disabled']
    },
    plugins: [
        require('@tailwindcss/ui')
    ]
}
