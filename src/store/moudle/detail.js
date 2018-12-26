import detail from '../../api/detail'
const state = {
    list: [],
    listData: {}
}
const getters = {

}
const mutations = {
    setListDetail(state, payload) {
        // state.list = payload
        /* eslint-disable */
        state.list = payload.datas
        state.listData = payload
    },
    setNull(state, payload) {
        state.listData = {}
        state.list = []
    }
}

const actions = {
    getListDetail({ commit }, { page, number }) {
        detail.getListDetail(listData => {
            commit('setNull')
            commit('setListDetail', listData)
        }, page, number)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
/**
 * 
 * const state = {

}
const getters = {

}
const mutations = {

}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
 */