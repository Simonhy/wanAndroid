import axios from "axios";

export default {
    getBanners(cb) {
        /* eslint-disable */
        axios.get('/apis/banner/json').then(res => {
            //console.log(res.data)
            cb(res.data.data)
        })
    },
    getListArti(cb, page) {
        /* eslint-disable */
        axios.get('/apis/article/list/' + page + '/json').then(res => {
            //获取列表
            // console.log("当前页--->" + res.data.data.datas[0].desc, page)
            cb(res.data.data)
        })
    }
}