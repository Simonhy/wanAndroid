import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router/index'
import store from './store/index'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false



// 通过use方法加载axios插件
Vue.use(VueAxios, axios)
Vue.use(Vant);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')