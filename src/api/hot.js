import axios from "axios";


export default {
    getHotKey(cb) {
        /* eslint-disable */
        axios.get('/apis/hotkey/json').then(res => {
            //console.log(res.data)
            cb(res.data.data)
        })
    },

    getCommonHot(cb) {
        axios.get('/apis/friend/json').then(res => {
            //console.log(res.data)
            cb(res.data.data)
        })
    }


}