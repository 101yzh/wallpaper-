<template>
	<view class="userLayout pageBg" v-if="userInfo">
		<view :style="{height:totalHeight + 'px'}">		
		</view>
		<view class="userInfo">
			<view class="avatar">
				<image src="/static/images/cat.png" mode="aspectFill"></image>
			</view>
			<view class="nickname">YZH</view>
			<view class="address">来自于: 
			{{userInfo.address.city || userInfo.address.province}}
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<navigator url="/pages/classlist/classlist?name=我的下载&type=download">
					<view class="row">
						<view class="left">
							<uni-icons type="download-filled" size="20"></uni-icons>
							<view class="text">我的下载</view>
						</view>
						<view class="right">
							<view class="text">{{userInfo.downloadSize}}</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
					</view>
				</navigator>
				
				<navigator url="/pages/classlist/classlist?name=我的评分&type=score">
					<view class="row">
						<view class="left">
							<uni-icons type="star-filled" size="20" ></uni-icons>
							<view class="text">我的评分</view>
						</view>
						<view class="right">
							<view class="text">{{userInfo.scoreSize}}</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
					</view>
				</navigator>
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20" ></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					<!-- 条件编译器:只能在小程序里 -->
					<!-- #ifdef MP -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<button @click="clickContact">拨打电话</button>
					<!-- #endif -->
					
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row" >
					<view class="left">
						<uni-icons type="notification-filled" size="20" ></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<view class="row" >
					<view class="left">
						<uni-icons type="flag-filled" size="20" ></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
	</view>
	
	<view class="loadingLayout" v-else>
		<view :style="{height:totalHeight + 'px'}"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<script setup>
import {getNavBarHeight} from "@/utils/system.js"
import { onMounted,ref } from "vue";
import {apiUserInfo} from "@/api/apis.js"

const userInfo = ref(null)
const totalHeight = ref(0)
onMounted( async ()=>{
	let res = await getNavBarHeight()
	totalHeight.value = res.statusBarHeight + res.titleBarHeight
})

// 查询用户信息
const getUserInfo = ()=>{
	apiUserInfo().then(res=>{
		userInfo.value = res.data
	})
}


const clickContact = ()=>{
		uni.makePhoneCall({
			phoneNumber:"15099935236"
		})
	}


getUserInfo()
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		padding: 50rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nickname{
			font-size: 44rpx;
			color: #333;
			padding: 20rpx 0 5rpx;
		}
		.address{
			font-size: 28rpx;
			color: #aaa;
		}
	}
	.section{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #fff;
				padding: 0 30rpx;
				height: 100rpx;
				position: relative;
				border-bottom: 1px solid #eee;
				&:last-child{border-bottom: 0;}
				.left{
					display: flex;
					align-items: center;
					:deep(){
						.uni-icons{
						color: $brand-theme-color !important;
							}
						}
					.text{
						padding-left: 18rpx;
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					
					.text{
						font-size: 28rpx;
						color: #aaa;
					}
				}
				button{
					position: absolute;
					top: 0;
					left: 0;
					height: 100rpx;
					width: 100%;
					opacity: 0;
				}
			}
		}
	}
}
</style>
