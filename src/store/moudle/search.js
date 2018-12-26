import search from '../../api/search'
const state = {
    searchs: [],
    search: {}
}
const getters = {

}
const mutations = {
    setSearch(state, payload) {
        state.search = payload
        state.searchs = payload.datas
    }
}

const actions = {
    /* eslint-disable */
    getSearch({ commit }, { page, keyword }) {
        //console.log(keyword)
        search.getSearch(search => {
            commit('setSearch', search)
        }, page, keyword)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}