import axios from "axios";

export default {
    getKnowledge(cb) {
        /* eslint-disable */
        axios.get('/apis/tree/json').then(res => {
            //console.log(res.data)
            cb(res.data.data)
        })
    }

}