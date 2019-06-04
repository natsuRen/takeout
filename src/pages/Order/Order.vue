<template>
  <div>
  	<van-nav-bar title="订单"/>
  </div>
</template>

<script type="text/javascript">
	import {NavBar} from 'vant';


	export default {
		components:{
			[NavBar.name]: NavBar
		}
	};
</script>

<style type="text/css" lang="stylus"  rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
	.van-nav-bar
		background-color:#02a774
	.van-nav-bar__title
		color:#fafafa
</style>