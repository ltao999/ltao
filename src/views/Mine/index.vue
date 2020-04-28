<template>
    <div id="main">
        <Header title="我的神影"></Header>
        <div id="content">
            <Login></Login>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
	import Header from '../../components/Header/index.vue';
    import Tabbar from '../../components/TabBar/index.vue'; 
    import Login from '../../components/Login/index.vue';
	export default{
		name:"Mine",
		components:{
			Header:Header,   //可简写成Header
			Tabbar:Tabbar,
			Login:Login
		}
	}
</script>