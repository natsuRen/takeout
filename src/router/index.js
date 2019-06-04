/*路由器对象模块*/
import Vue from 'vue'
import Router from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'

/*声明使用插件*/
Vue.use(Router)

export default new Router({
	//配置所有路由
  routes: [
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
    	path:'/',
    	redirect:'/msite'
    }
  ]
})
