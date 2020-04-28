import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie/index.js'
import CinemaRouter from './cinema/index.js'
import MineRouter from './mine/index.js'



Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes:[
		MovieRouter,
		CinemaRouter,
		MineRouter,
		//重定向，当上面路由不匹配时，跳转到movie页面
		{
		    path:'/*',
			redirect:'/movie'			  
		},
	]
})
 