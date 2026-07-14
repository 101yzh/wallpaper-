export function compareTimestamp(timestamp) {
  // 兜底：时间戳不存在/非法，直接返回'3月+'
  if (!timestamp || isNaN(Number(timestamp))) return '3月+';
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - Number(timestamp);
  // 未来时间也兜底
  if(timeDiff < 0) return '3月+'

  if (timeDiff < 60000) {
    return '1分钟内';
  } else if (timeDiff < 3600000) {
    return Math.floor(timeDiff / 60000) + '分钟';
  } else if (timeDiff < 86400000) {
    return Math.floor(timeDiff / 3600000) + '小时';
  } else if (timeDiff < 2592000000) {
    return Math.floor(timeDiff / 86400000) + '天';
  } else if (timeDiff < 7776000000) {
    return Math.floor(timeDiff / 2592000000) + '月';
  } else {
    // 超过3个月不再返回null，替换为固定文本
    return '3月+';
  }
}

export function goHome(){
	uni.showModal({
		title:"提示",
		content:"页面有误将返回首页",
		showCancel:false,
		success:(res)=>{
			if(res.confirm){
				uni.reLaunch({
					url:"/pages/index/index"
				})
			}
		}
	})
}