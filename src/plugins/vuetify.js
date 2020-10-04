import Vue from 'vue'
import Vuetify,{
    VTextField,
    VRow,
    VCol,
    VBtn,
    VContainer,
    VMain
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VTextField,
        VBtn,
        VContainer,
        VMain,
        VRow,
        VCol
    },
})

export default new Vuetify()