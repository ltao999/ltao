<template>
	<div id="main">
		<!-- 头部 -->
		<Header title="神影电影"></Header>	
		<div id="content">
			<div class="movie_menu">
				<router-link tag="div" to="/movie/city" class="city_name">
					<span>北京</span><i class="fa fa-caret-down"></i>
				</router-link>
				<div class="hot-swtich">
					<router-link tag="div" to="/movie/nowPlaying" class="hot_item active">正在热映</router-link>
					<router-link tag="div" to="/movie/comingSong" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/search" class="search_entry">
					<i class="fa fa-search"></i>
				</router-link>
			</div>
			<!-- 二级路由渲染 -->
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<!-- 尾部 -->
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Header from '../../components/Header/index.vue';
	import Tabbar from '../../components/TabBar/index.vue'; 
	export default{
		name:"Movie",
		components:{
			Header:Header,   //可简写成Header
			Tabbar:Tabbar,
			
		}
	}
</script>

<style>
	#content .movie_menu{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #E6E6E6;
		display: flex;
        justify-content: space-between; 
	}
	.movie_menu .city_name{
		margin-left: 20px;
		height: 100%;
		line-height: 45px;
	}
	.movie_menu .city_name.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #ef4238;
		box-sizing: border-box;
	}
	.movie_menu .hot-swtich{
		display: flex;
		height: 100%;
		line-height: 45px;
	}
	.movie_menu .hot_item{
		font-size: 15px;
		color: #666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
	}
	.movie_menu .hot_item.router-active{
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	.movie_menu .search_entry{
		margin-right: 20px;
		height: 100%;
		line-height: 45px;
	}
	.movie_menu .search_entry.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #EF4238;
		box-sizing: border-box;
	}
	.movie_menu .search_entry i{
		font-size: 24px;
        color: red;  
	}
	.movie_menu .hot_item.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #EF4238;

	}
	
</style>
