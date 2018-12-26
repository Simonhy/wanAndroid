import axios from "axios";

export default {

    getListDetail(cb, page, number) {
        /* eslint-disable */
        axios.get('/apis/article/list/' + page + '/json?cid=' + number).then(res => {
            //获取列表
            // console.log("当前页--->" + res.data.data.datas[0].desc, page)
            cb(res.data.data)
        })
    }
}