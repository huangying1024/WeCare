<template>
<view class="">
	<banner />
	<!-- banner -->
	
	<collect />
	<!-- collect -->
	<helpprojectfilewidth />
	
	<!-- flow -->
	<view class="flow">
		<view class="title">
			<text>特别版参加流程</text>
			<view class="title__"></view>
		</view>
	</view>
	<flows></flows>
<flow />
<footer />
<view class="footer">
	<view class="logo">
		<image  class="logos" src="../../static/foot-logo.png" mode=""></image>
	</view>
	<view class="">
		<text>主办方：腾讯公益慈善基金会</text>
	</view>
	<view class="">
		<text>合作方：微信小游戏、微信小程序、腾讯功能游戏</text>
	</view>
	<view class="">
		<text>Copyright &copy;  1998 - 2020 Tencent. All Rights Reserved.</text>
	</view>
</view>

</view>
</template>

<script>
	import banner from "../../components/banner/index.vue"
	import collect from "../../components/collect/collect.vue"
	import helpprojectfilewidth from "../../components/helpprojectfilewidth/helpprojectfilewidth.vue"
	import flow from "../../components/flow/flow.vue"
	import flows from "../../components/flows/flows.vue"
	import footer from "../../components/footer/footer.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			banner,
			flow,
			helpprojectfilewidth,
			flows,
			footer
		}
	}
</script>

<style>
	.title>text{
		display:block;
		font-size:50rpx;
	}
	.title__{
		width: 60rpx;
		height: 6rpx;
		background:#eaba5c;
		display: inline-block;
	}

	/* collect */

	
	/* flow */
	.flow{
		text-align: center;
		padding-top:40rpx;
	}
	.flow>title{
	}
	
	/* footer */
	.footer{
		width: 100%;
		color:#727475;
		font-size:16rpx;
		text-align: center;
		clear: both;
		padding:40rpx 0 40rpx 0;
		margin:40rpx 0 80rpx 0;
		background:#f7f7f7;
		line-height: 44rpx;
	}
	.logos{
		width:20% ;
		height: 40rpx;
		margin-bottom:30rpx;
	}
	
	
</style>
