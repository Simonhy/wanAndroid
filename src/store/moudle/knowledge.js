import knowledge from '../../api/knowledge'
const state = {
    knowledges: []
}
const getters = {

}
const mutations = {
    setKnowledges(state, payload) {
        state.knowledges = payload
    }
}

const actions = {
    getKnowledge({ commit }) {
        //异步获取数据
        knowledge.getKnowledge(knowledges => {
            commit('setKnowledges', knowledges)
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}