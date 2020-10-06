
require('./bootstrap');

window.Vue = require('vue');


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router';
import App from './App.vue';

import store from './store/'; // vuex 数据存储所需对象
import routes from './router';    // 路由配置文件
// 实例化路由

import axios from 'axios'
Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

var vm = new Vue({
    store,
    router
  }).$mount('#app');