<template>
	<!-- keep-alive是vue内置对象，能在组件切换过程中将其状态保存在内存中，防止重复渲染dom -->
  <keep-alive>
	  <router-view></router-view>
  </keep-alive>
</template>

