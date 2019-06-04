<!-- 底部栏 -->
<template>
	<div class="footer_guide">
		<div class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
			<span class="item-icon">
				<i class="iconfont iconfoodandbeverage"></i>
			</span>
			<span>外卖</span>
		</div>
		
		<div class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
			<span class="item-icon">
				<i class="iconfont iconsearch"></i>
			</span>
			<span>搜索</span>
		</div>
		
		<div  class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
			<span class="item-icon">
				<i class="iconfont iconemaxcitygerenxinxitubiaoji03"></i>
			</span>
			<span>订单</span>
		</div>
		
		<div class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
			<span class="item-icon">
				<i class="iconfont iconuser"></i>
			</span>
			<span>我的</span>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*引入公共样式*/
@import "../../common/stylus/mixins.styl"
.footer_guide
  // 顶部有白色的边框
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    text-decoration: none
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>