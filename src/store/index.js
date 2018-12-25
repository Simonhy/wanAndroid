import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger' //进行日志打印
import home from "./moudle/home";
import knowledge from "./moudle/knowledge";

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production' //生产模式关闭日志模式
export default new Vuex.Store({
    modules: {
        home,
        knowledge
    },
    strict: debug,
    plugins: [
        ...(debug ? [createLogger()] : []) //开发模式日志打印
    ]
})