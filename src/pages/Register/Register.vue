<template>
  <div>
  	<van-nav-bar
	  title="注册"
	  left-text="返回"
	  left-arrow
	  @click-left="$router.back()"
	/>

  </div>
</template>

<script type="text/javascript">
	import {NavBar,Icon} from 'vant';


	export default {
		components:{
			[NavBar.name]: NavBar,
			[Icon.name]:Icon
		}
	};
</script>

<style type="text/css" lang="stylus"  rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
	.van-nav-bar
		background-color:#02a774
	.van-nav-bar__title
		color:#fafafa
	.van-nav-bar__text
		color:white
	.van-nav-bar .van-icon
		color:white
</style>