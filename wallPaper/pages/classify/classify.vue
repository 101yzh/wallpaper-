<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
import {apiGetClassify} from "@/api/apis.js"
import { ref } from 'vue';
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
const classifyList = ref([])

const getClassify = async ()=>{
	let res = await apiGetClassify({
		pageSize:15
	})
	classifyList.value = res.data
	console.log(res.data);
}

getClassify();

// 分享给好友
onShareAppMessage(()=>{
	return {
		title:'哈叔壁纸',
		path:"/pages/classify/classify"
	}
})
// 分享朋友圈
onShareTimeline(()=>{
	return{
		title:'哈叔壁纸~~~'
	}
})
</script>

<style lang="scss">
.classify{
	padding: 30rpx;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	gap: 15rpx;
}
</style>