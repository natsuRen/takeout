// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//入口js

import Vue from 'vue'
import App from './App.vue'
//导入路由器
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router//配置路由（结果：1.多了几个组件标签，route-link,route-view,keep-alive;
                       //2.多了两个属性，$.route,$.router）
})
