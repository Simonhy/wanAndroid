import axios from "axios";
import qs from 'qs';


export default {
    getSearch(cb, page, keyword) {
        /* eslint-disable */
        console.log(keyword)
        let data = {
            'k': keyword
        }
        let url = '/apis/article/query/' + page + '/json'
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url,
        };
        axios(options).then(res => {
            //console.log(res.data)
            cb(res.data.data)
        })
    }

}