<template name="banner">
	<view class="banner">
		<image src="../../static/header-bg-m.jpg" mode="">
		</image>
		<view class="banner__logo">
			<image src="../../static/header-logo.png" mode=""></image>
		</view>
		<view class="banner__con">
			<image src="../../static/slogan.png" mode=""></image>
		</view>
		<view class="banner__btn">
			<text>立即投稿</text>
			<view class="banner__btn__icon">
				<view class="">
					<image src="../../static/arr-down.png" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/arr-down.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.banner{
		position:relative;
	}
	.banner>image{
		width: 100%;
		height: 1208rpx;
	}
	.banner__logo{
		position:absolute;
		top:20px;
		z-index: 50;
		left:50%;
		margin-left:-130px;
	}
	.banner__logo>image{
			width: 500rpx;
			height: 50rpx;
	}
	.banner__con{
		position:absolute;
		top:220px;
		z-index: 50;
		left:50%;
		margin-left:-130px;
	}
	.banner__con>image{
		width: 520rpx;
		height: 200rpx;
	}
	.banner__btn{
		width: 400rpx;
		position:absolute;
		bottom:40rpx;
		left:50%;
		margin-left:-200rpx;
	}
	.banner__btn>text{
		display:inline-block;
		width: 400rpx;
		height: 100rpx;
		background:#eaba5c;
		color:#56290a;
		border-radius: 50rpx;
		text-align: center;
		line-height: 100rpx;
		font-size:44rpx;
		
	}
	.banner__btn__icon>view>image{
		width: 40rpx;
		height: 24rpx;
		vertical-align: middle;
		margin-left:44%;
	}
	.banner__btn__icon>view:nth-child(1)>image{
		margin-top:40rpx;
	}
	.banner__btn__icon>view:nth-child(2)>image{
		opacity: 0.6;
		margin-top:-20rpx;
	}
	/* banner */
</style>
