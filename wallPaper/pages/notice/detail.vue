<template>
	<view class="container">
		<view class="card">
			<!-- 顶部图标 -->
			<view class="icon-box">
				<uni-icons
					type="heart-filled"
					size="60"
					color="#ff6b81"
				></uni-icons>
			</view>

			<!-- 标题 -->
			<view class="title">
				天天开心
			</view>

			<!-- 内容 -->
			<view class="content">
				愿你每天都有好心情，
				生活充满阳光，
				工作顺顺利利，
				幸福快乐每一天！
			</view>

			<!-- 底部 -->
			<view class="footer">
				<uni-icons
					type="star-filled"
					size="18"
					color="#FFD700"
				></uni-icons>

				<text class="footer-text">
					Keep Smiling Every Day
				</text>

				<uni-icons
					type="star-filled"
					size="18"
					color="#FFD700"
				></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "HappyNotice"
}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: linear-gradient(135deg, #74ebd5, #9face6);
	padding: 30rpx;
	box-sizing: border-box;
}

.card {
	width: 100%;
	max-width: 650rpx;
	background: #ffffff;
	border-radius: 30rpx;
	padding: 50rpx 40rpx;
	text-align: center;
	box-shadow: 0 15rpx 35rpx rgba(0, 0, 0, 0.12);
}

.icon-box {
	margin-bottom: 20rpx;
}

.title {
	font-size: 48rpx;
	font-weight: bold;
	color: #ff6b81;
	margin-bottom: 30rpx;
}

.content {
	font-size: 30rpx;
	line-height: 1.9;
	color: #666;
	margin-bottom: 40rpx;
}

.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15rpx;
	color: #999;
	font-size: 26rpx;
}

.footer-text {
	margin: 0 10rpx;
}
</style>