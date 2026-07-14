<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:statusBarHeight + 'px'}"></view>   <!-- 挤空间 -->
			<view class="titleBar" :style="{height:titleBarHeight + 'px'}">
				<view class="title">{{title}}</view>
				<navigator url="/pages/search/search" class="search">
					<uni-icons class="icon" type="search" size="18" color="#888"></uni-icons>
					<text class="text">搜索</text>
				</navigator>
			</view>
		</view>
		
		<view class="fill" :style="{height:statusBarHeight + titleBarHeight +'px'}">
			
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {getNavBarHeight } from "@/utils/system.js"
const statusBarHeight = ref(0)
const titleBarHeight = ref(44)

defineProps({
	title:{
		type:String,
		default:"壁纸"
	}
	
})

onMounted(async () => {
  // 调用工具函数
  const res = await getNavBarHeight()
  statusBarHeight.value = res.statusBarHeight
  titleBarHeight.value = res.titleBarHeight
})
</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom,rgba(0,0,0,0),#fff 400rpx),
		linear-gradient(to right,#beecd8,#f4e2d8)
		;
		.statusBar{}
		.titleBar{
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			.title{
				font-size: 45rpx;
				font-weight: 700;
				color: $text-font-color-1;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255,255,255,0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					padding-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
				}
			}
			
		}
	}
}
</style>