import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as Vue from "@vue/test-utils";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');