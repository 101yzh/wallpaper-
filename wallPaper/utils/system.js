export function getNavBarHeight() {
  return new Promise(async (resolve) => {
    // 1. 获取系统信息
    const sysInfo = await uni.getSystemInfo()
    const statusBarHeight = sysInfo.statusBarHeight || 15
    let titleBarHeight = 44 // H5兜底默认高度
	
    // 仅微信小程序执行胶囊计算
    //#ifdef MP-WEIXIN
    const menuInfo = uni.getMenuButtonBoundingClientRect()
    const { top, height } = menuInfo
    titleBarHeight = height + (top - statusBarHeight) * 2
    //#endif

    resolve({
      statusBarHeight,
      titleBarHeight
    })
  })
}