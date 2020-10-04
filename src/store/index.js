import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        dimensions:{
            width:0,
            height:0
        }
    },
    getters:{
        getDimensions: (state) => {
            return state.dimensions
        },
    },
    mutations:{
        setDimensions: (state, dimensions) => {
            state.dimensions.width = dimensions.width
            state.dimensions.height = dimensions.height 
        }
    }
})