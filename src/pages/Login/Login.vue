<template>
  <div>
  	<van-nav-bar
	  title="登录"
	  left-text="返回"
	  right-text="注册"
	  left-arrow
	  @click-left="$router.back()"
	  @click-right="onClickRight('/register')"
	/>

	<div class="loginContainer">
		<div class="loginInner">
			<div class="login_header">
				<h2 class="login_logo">Takeout</h2>
				<div class="login_header_title">
					<a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          			<a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
				</div>
			</div>

			

			<div class="login_content">
				<form>
					<div :class="{on: loginWay}">
						<section class="login_message">
							<input type="tel" maxlength="11" placeholder="手机号">
							<button class="get_verification" :class="">获取验证码</button>
						</section>
						<section class="login_verification">
			              	<input type="tel" maxlength="8" placeholder="验证码">
			            </section>
			            <section class="login_hint">
			              	温馨提示：未注册Mint外卖帐号的手机号，登录时将自动注册，且代表已同意
			             	<a href="javascript:;">《用户服务协议》</a>
			            </section>
					</div>



					<div :class="{on: !loginWay}">
						<section class="login_message">
			                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
			            </section>
						<section class="login_verification">
			                <input type="text" maxlength="8" v-if="showPwd" placeholder="密码">
			                <input type="password" maxlength="8" v-else placeholder="密码">
			                <div class="switch_button off">
			                  <div class="switch_circle"></div>
			                  <span class="switch_text"></span>
			                </div>
			            </section>
			            <section class="login_message">
			                <input type="text" maxlength="11" placeholder="验证码">
			                <img class="get_verification">
			            </section>
					</div>
				</form>
			</div>

		</div>



	</div>

  </div>
</template>

<script type="text/javascript">
	import {NavBar,Icon} from 'vant';


	export default {
		components:{
			[NavBar.name]: NavBar,
			[Icon.name]:Icon
		},
		data () {
	    return {
			    loginWay: false, // true代表短信登陆, false代表密码
			    showPwd: false, // 是否显示密码
		    }
	 	},
		methods:{
			onClickRight(path){
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
	.van-nav-bar__text
		color:white
	.van-nav-bar .van-icon
		color:white
</style>