<template>
	<view class="classlist">
		<!-- 上方加载 -->
		<view class="loadingLayout" v-show="!classList.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="content">
			<navigator :url="`/pages/preview/preview?id=${item._id}`" class="item" v-for="item in classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<!-- 下方加载 -->
		<view class="loadingLayout" v-if="classList.length || noData">
			<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
		</view>
		
		<!-- 撑开小程序底部安全区域 -->
		<view class="safe-area-inset-bottom">
			
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {apiGetClassList,apiGetHistoryList} from "@/api/apis.js"
import {onLoad, onReachBottom,onShareAppMessage,onShareTimeline,onUnload} from "@dcloudio/uni-app"
import {goHome} from "@/utils/common.js"
const queryParams = {
	pageNum:4,
	pageSize:12
}
const classList = ref([])
const noData = ref(false)
let pageName
onLoad((e)=>{
	let{id = null,name = null,type = null} = e
	if(type) queryParams.type = type
	if(id) queryParams.classid = id
	pageName = name
	// 修改nav标题
	uni.setNavigationBarTitle({
		title:name
	})
	// setup里执行顺序是最快的
	getClassList();
})

onReachBottom(()=>{
	if(noData.value) return;
	queryParams.pageNum++
	getClassList();
})

const getClassList = async ()=>{
	let res;
	if(queryParams.classid) res = await apiGetClassList(queryParams)
	if(queryParams.type) res = await apiGetHistoryList(queryParams)
	
	// 数组拼接
	classList.value = [...classList.value,...res.data]
	if(queryParams.pageSize > res.data.length) noData.value = true;
	uni.setStorageSync("storageClassList",classList.value)
	// console.log(classList.value);
}

// 分享给好友
onShareAppMessage(()=>{
	return {
		title:'哈叔壁纸-'+pageName,
		path:"/pages/classlist/classlist?id="+queryParams.classid+"&name="+pageName
	}
})
// 分享朋友圈
onShareTimeline(()=>{
	return{
		title:'哈叔壁纸~~~',
		query:"id="+queryParams.classid+"&name="+pageName
	}
})

// 清除缓存
onUnload(()=>{
	uni.removeStorageSync("storageClassList")
})
</script>

<style lang="scss">
.classlist{
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;
		padding: 5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}
</style>