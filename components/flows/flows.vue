<template name="flows">
	<view class="flowsb">
	<view class="flowsborder">
	</view>
		<view class="flowsborders">
			
		</view>
<view class="flows__con">
	<view class="flowslist" v-for="item in flowsArray">
		
			<view class="flowslisticon">
				<view class="flowlisticons">
					
				</view>
				
			</view>
			
				<image class="imageflows" src="../../icons/process-1.svg" mode=""></image>
		<view class="flowstext">
			<view class="">
				<text>{{item.date}}</text>
			</view>
			<view class="">
				<text>{{item.text}}</text>
			</view>
		</view>
	</view>
</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				flowsArray:[
					{
						id:"1",
						img:"../../icons/process-1.svg",
						date:"6月10日",
						text:"投稿开始",
					},
					{
						id:"2",
						img:"http://www.w3.org/2000/svg",
						date:"6月24日",
						text:"入围公布"
					},
					{
						id:"3",
						img:"http://www.w3.org/2000/svg",
						date:"6月30日-9月30日",
						text:"制作周期"
					},
					{
						id:"4",
						img:"http://www.w3.org/2000/svg",
						date:"10月起",
						text:"投放周期"
					}
				]
			}
		}
	}
</script>

<style>
	.flowsb{
		position:relative;
	}
	.flowsborder{
		height: 740rpx;
		top:170rpx;
		position:absolute;
		left:19.2%;
		width: 4rpx;
		background:#d7e5fd;
		z-index: -1;
		float:left;
	}
	.flowsborders{
		position:absolute;
		margin:900rpx 0 0 17.4%;
		 float: left;
		 width: 0; 
		 border-width: 16rpx;
		 border-style: solid;
		 border-color:#d7e5fd transparent transparent transparent;
	}
	.flows__con{
		float:left;
		margin-left:10%;
	}
	.flowslist{
		clear:both;
		margin-top:120rpx;
	}
	.flowslisticon{
		float:left;
		width: 29rpx;
		height: 29rpx;
		border-radius: 50%;
		border:4rpx solid #d7e5fd;
		margin:40rpx 0 0 10%;
		
	}
	.flowlisticons{
		width: 20rpx;
		height: 20rpx;
		background:#77a5f8;
		border-radius: 50%;
		/* display: inline-block; */
		/* text-align: center; */
		margin:5rpx 5rpx;
	}
	.imageflows{
		width: 15%;
		float:left;
		height: 80rpx;
		margin:12rpx 44rpx 120rpx 40rpx;
	}
	.flowstext{
		/* float:left; */
		margin-left:22rpx;
		/* background:red; */
		min-width: 500rpx;
	}
</style>

