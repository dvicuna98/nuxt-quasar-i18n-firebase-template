export default defineNuxtConfig({
    css:['@/assets/css/main.scss'],
    ssr: false,
    components: [
        {
            path:'~/components',
            extensions:['.vue']
        }
    ],
    modules: [
        'nuxt-quasar-ui',
        'nuxt-vuefire',
    ],
    vuefire: {
        auth: true,
        config: {
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTHDOMAIN,
        },
    },
    quasar: {
        sassVariables: 'assets/css/quasar.variables.scss',
        extras: {
            fontIcons: ['material-icons'],
        },
    },
})