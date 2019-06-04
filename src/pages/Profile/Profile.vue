<template>
  <div>
  	<van-nav-bar title="我的"/>
  	<van-cell title="登录/注册" @click="goTo('/login')" is-link />
  </div>
</template>

<script type="text/javascript">
	import {NavBar,Cell} from 'vant';


	export default {
		components:{
			[NavBar.name]: NavBar,
			[Cell.name]: Cell
		},
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	};
</script>

<style type="text/css" lang="stylus"  rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
	.van-nav-bar
		background-color:#02a774
	.van-nav-bar__title
		color:#fafafa
	.van-button
		margin 50px

</style>
