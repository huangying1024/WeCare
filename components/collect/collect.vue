<template name="collect">
	<view class="collect centerall">
			<view class="title">
				<text>征集主题</text>
				<view class="title__"></view>
				<view class="title__con color-a">
					<text>本次围绕“抗疫”主题征集，包括但不限于以
	下方向，欢迎大家踊跃发挥创意。</text>
				</view>
			</view>
			<view class="collect__con imagesize">
				<image src="../../static/s-science.png" mode=""></image>
				<view class="collect__con__title">
					<text>抗疫卫生科普</text>
				</view>
				<view class="collect__con__con color-a">
					<text>
						不局限于本次新冠肺炎，可以增加非典，禽流
						感等，科普传染病防治知识，提高全民卫生保
						健意识。
					</text>
				</view>
			</view>
			<view class="collect__con imagesize">
				<image src="../../static/s-angel.png" mode=""></image>
				<view class="collect__con__title">
					<text>抗疫卫生科普</text>
				</view>
				<view class="collect__con__con color-a">
					<text>
						不局限于本次新冠肺炎，可以增加非典，禽流
						感等，科普传染病防治知识，提高全民卫生保
						健意识。
					</text>
				</view>
			</view>
			<view class="collect__con imagesize">
				<image src="../../static/s-story.png" mode=""></image>
				<view class="collect__con__title">
					<text>抗疫卫生科普</text>
				</view>
				<view class="collect__con__con color-a">
					<text>
						不局限于本次新冠肺炎，可以增加非典，禽流
						感等，科普传染病防治知识，提高全民卫生保
						健意识。
					</text>
				</view>
			</view>
		</view>
</template>

<script>
	export default{
		data(){
			return{
				collectList:[
					{
						id: "1",
						img: ""
					}
				]
			}
		}
	}
</script>

<style>
	.centerall{
		text-align: center;
		margin-top:110rpx;
	}
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
	.title__con{
		margin-top:50rpx;
	}
	.collect__con__title{
		color:#2f69f2;
		font-weight: 600;
		font-size:38rpx;
		line-height: 140rpx;
	}
	.collect__con__con{
		line-height: 60rpx;
	}
	.color-a{
			line-height: 60rpx;
			color:#4a526c;
	}
	.imagesize>image{
		width: 40%;
		height: 280rpx;
		margin-top:66rpx;
	}
	/* collect */
</style>
