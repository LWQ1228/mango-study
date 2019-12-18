// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http'
import global from './utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//注册使用Element
Vue.use(ElementUI)
//注册使用api模块
Vue.use(api)
//挂载全局配置模块
Vue.prototype.global = global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
