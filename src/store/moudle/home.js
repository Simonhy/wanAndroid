import home from '../../api/home'
const state = {
    banners: [],
    list: [],
    listData: {}
}
const getters = {

}
const mutations = {
    //更改数据状态
    setBanners(state, payload) {
        state.banners = payload
    },
    setListArti(state, payload) {
        // state.list = payload
        /* eslint-disable */
        state.list = payload.datas
        state.listData = payload
    }
}

const actions = {
    getBanners({ commit }) {
        //异步获取数据
        home.getBanners(banners => {
            commit('setBanners', banners)
        })
    },
    getListArtils({ commit }, page) {
        home.getListArti(listData => {
            commit('setListArti', listData)
        }, page)
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