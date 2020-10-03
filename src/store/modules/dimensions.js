const state = () => ({
    dimensions:{
        width:0,
        height:0
    }
  })

const getters = {
    getDimensions: (state) => {
        return state.dimensions
    },
}
const mutations = {
    setDimensions(state, { width,height }){
        state.dimensions.width = width
        state.dimesions.height = height
    }
}

export default{
    state,
    getters,
    mutations
}