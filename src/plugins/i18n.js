import {reactive} from "vue";

export default {
    install: function (app, options) {
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((o, i) => {
                console.log(o, i, o[i])
                if (o) return o[i]
            }, options)
        }
        app.provide('i18n', options)
    }
}