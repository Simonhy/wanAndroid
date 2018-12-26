import hot from '../../api/hot'
const state = {
    keys: [],
    commons: []
}
const getters = {

}
const mutations = {
    setKeys(state, payload) {
        state.keys = payload
    },
    setCommons(state, payload) {
        state.commons = payload
    }
}

const actions = {
    /* eslint-disable */
    getHotKeys({ commit }) {
        hot.getHotKey(keys => {
            commit('setKeys', keys)
        })
    },
    getCommonHot({ commit }) {
        hot.getCommonHot(commons => {
            commit('setCommons', commons)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}