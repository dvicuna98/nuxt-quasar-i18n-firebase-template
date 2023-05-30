import { createI18n } from 'vue-i18n'
import en from '../lang/en.json'
import es from '../lang/es.json'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'es',
        messages: {
            en: en,
            es: es
        }
    })

    vueApp.use(i18n)
})