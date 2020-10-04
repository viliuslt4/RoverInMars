import Vue from 'vue'
import Vuetify,{
    VTextField,
    VFlex,
    VLayout,
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
        VFlex,
        VLayout,
    },
})

export default new Vuetify()