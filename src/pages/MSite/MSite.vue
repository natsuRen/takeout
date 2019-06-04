<template>
  <div class="swiper-container">
    <van-nav-bar title="外卖"/>
  	<div class="swiper-wrapper">
        <div class="swiper-slide">
        	<img src="1.jpg">
        </div>
        <div class="swiper-slide">
        	<img src="1.jpg">
        </div>
        <div class="swiper-slide">
        	<img src="1.jpg">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  	</div>
  </div>
</template>

<script>
import {NavBar} from 'vant';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {  
  components:{
      [NavBar.name]: NavBar
    },
	mounted(){
		new Swiper('.swiper-container',{
			loop:true,
			pagination:{
				el:'.swiper-pagination',
			}
		})
	}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .van-nav-bar
        background-color:#02a774
        .van-nav-bar__title
          color:#fafafa
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              margin 50px
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
             
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
      .msite_shop_list
              top-border-1px(#e4e4e4)
              margin-top 10px
              background #fff
              .shop_header
                padding 10px 10px 0
                .shop_icon
                  margin-left 5px
                  color #999
                .shop_header_title
                  color #999
                  font-size 14px
                  line-height 20px
</style>

