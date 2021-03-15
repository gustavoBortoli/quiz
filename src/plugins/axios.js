import Vue from 'vue';
import axios from "axios";

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://projetofinal-7b814-default-rtdb.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.response.use(res => {
            const arr = []
            for(let key in res.data) {
                arr.push({ id: key, ...res.data[key] })
            }
            res.data = arr
            return res
        })
    }
})