<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper
			indicator-dots
			indicator-color="rgba(255,255,255,0.5)"
			indicator-active-color="#fff"
			autoplay
			circular
			>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<navigator v-if="item.target == 'miniProgram'" 
					:url="`/pages/classlist/classlist?${item.url}`"
					 class="link"
					 target="miniProgram"
					 :app-id="item.appid"
					 >
						<image :src="item.picurl" mode="aspectFill"></image>
					</navigator>
					
					<navigator :url="`/pages/classlist/classlist?${item.url}`" class="link">
						<image :src="item.picurl" mode="aspectFill"></image>
					</navigator>
					
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 公告栏 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" ></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay circular interval="1500" duration="600">
					<swiper-item v-for="item in noticeList" :key="item.id">
						<navigator url="/pages/notice/detail">
							{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="16" color="#333"></uni-icons>
			</view>
		</view>
		
		<!-- 推荐区域 -->
		<view class="select">
			<common-title>
				<template #name>
					每日推荐
				</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" ></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview(item._id)">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 专题板块 -->
		<view class="theme">
			<common-title>
				<template #name>
					专题精选
				</template>
				<template #custom>
					<navigator url="/pages/classify/classify" open-type="reLaunch" class="more">More+</navigator>
				</template>
			</common-title>
			
			<view class="content">
				<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {apiGetBanner,apigetDayRandom,apiGetClassify} from "@/api/apis.js"
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
const bannerList = ref([])
const randomList = ref([])
const noticeList = ref([
	{id:'asdasd01',title:'要天天开心哦!'},
	{id:'asdasd02',title:'天天好运!'},
	{id:'asdasd03',title:'要保持健康哦!'},
])
const classifyList = ref([])
// 请求banner接口
const getBanner = async ()=>{
	let res = await apiGetBanner();
	bannerList.value = res.data
}

const getDayRandom = async ()=>{
	let res = await apigetDayRandom()
		randomList.value = res.data
}
	
const getClassify = async ()=>{
	let res = await apiGetClassify({
		select:true
	})
	classifyList.value = res.data
}

	
//跳转预览页面 
const goPreview = (id)=>{
	uni.setStorageSync("storageClassList",randomList.value)
	uni.navigateTo({
		url:"/pages/preview/preview?id=" + id
	})
}

getBanner();
getDayRandom();
getClassify();

// 分享给好友
onShareAppMessage(()=>{
	return {
		title:'哈叔壁纸',
		path:"/pages/index/index"
	}
})
// 分享朋友圈
onShareTimeline(()=>{
	return{
		title:'哈叔壁纸~~~'
	}
})
</script>

<style scoped lang="scss"> 
.homeLayout{
	.banner{
		width: 750rpx;
		padding: 30rpx 0;
		swiper{
			width: 750rpx;
			height: 340rpx;
			swiper-item{
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				.link{
					width: 100%;
					height: 100%;
					image{
						width: 100%;
						height: 100%;
						border-radius: 15rpx;
					}
				}
				
			}
		}
	}
	.notice{
		width: 690rpx;
		height: 80rpx;
		background: #f9f9f9;
		margin: 0 auto;
		border-radius: 80rpx;
		display: flex;
		line-height: 80rpx;
		.left{
			width: 140rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// 兼容小程序
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
				}
			}
			.text{
				color: $brand-theme-color;
				font-weight: 600;
				font-size: 28rpx;
			}
		}
		.center{
			// 自动填充
			flex: 1;
			swiper{
				height: 100%;
				swiper-item{
					height: 100%;
					font-size: 30rpx;
					color: #666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.right{
			width: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	
	.select{
		padding-top: 50rpx;
		.date{
			display: flex;
			align-items: center;
			color: $brand-theme-color;
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
				}
			}
			.text{
				margin-left: 5rpx;
			}
		}
		.content{
			width: 720rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;
			scroll-view{
				white-space: nowrap;
				.box{
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.box:last-child{margin-right: 30rpx;}
			}
		}
	}
	
	.theme{
		padding:50rpx 0;
		.more{
			font-size: 32rpx;
			color: #888;
		}
		.content{
			margin-top: 30rpx;
			padding: 0 30rpx;
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
</style>
