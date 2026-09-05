# 🖼️ wallPaper

> 一款基于 **uni-app + Vue 3** 开发的壁纸类多端应用，提供壁纸推荐、分类浏览、搜索、壁纸预览、评分、下载记录以及个人中心等功能。

---

## 📖 项目介绍

**wallPaper** 是一个基于 **uni-app** 开发的壁纸应用项目，采用 **Vue 3 + `<script setup>`** 进行页面开发，通过后端接口获取壁纸、分类、Banner、用户信息等数据。

项目整体采用组件化开发方式，将导航栏、分类卡片等公共 UI 抽离为独立组件，同时通过统一的 API 请求模块对后端接口进行封装，使页面业务逻辑更加清晰。

项目主要围绕壁纸浏览场景进行设计，用户可以在首页浏览每日推荐和专题精选，也可以按照不同分类查看壁纸，通过关键词搜索快速查找壁纸，并进入壁纸详情进行预览、查看壁纸信息、评分以及下载。

### ✨ 主要功能

* 🏠 **首页推荐**

  * Banner 轮播
  * 公告信息展示
  * 每日推荐
  * 专题精选
  * 快速进入壁纸分类

* 🗂️ **壁纸分类**

  * 分类列表
  * 分类壁纸展示
  * 瀑布式/网格式壁纸浏览
  * 上拉加载更多

* 🔍 **壁纸搜索**

  * 关键词搜索
  * 热门搜索
  * 搜索历史记录
  * 清空搜索历史
  * 搜索结果分页加载

* 🖼️ **壁纸预览**

  * 全屏壁纸预览
  * 左右滑动切换壁纸
  * 壁纸数量显示
  * 壁纸信息查看
  * 壁纸评分
  * 壁纸下载
  * 图片懒加载/预加载

* ⭐ **壁纸评分**

  * 支持用户对壁纸进行评分
  * 显示当前壁纸评分
  * 防止重复评分
  * 记录用户评分

* 📥 **个人中心**

  * 用户基本信息
  * 我的下载
  * 我的评分
  * 下载数量统计
  * 评分数量统计
  * 联系客服

* 📱 **多端支持**

  * 基于 uni-app 开发
  * 支持微信小程序等多端运行
  * 使用条件编译处理不同平台功能差异

---

## 🛠️ 项目技术栈

### 前端核心技术

| 技术                       | 说明                 |
| ------------------------ | ------------------ |
| **Vue 3**                | 前端核心框架             |
| **uni-app**              | 跨平台应用开发框架          |
| **JavaScript**           | 项目主要开发语言           |
| **SCSS**                 | 页面样式及公共样式开发        |
| **Vue `<script setup>`** | Vue 3 组合式 API 开发方式 |

### UI / 组件

| 技术           | 说明                                                       |
| ------------ | -------------------------------------------------------- |
| **uni-ui**   | 提供 Icon、Rate、Popup、SearchBar、LoadMore、DateFormat 等 UI 组件 |
| **CSS Grid** | 壁纸网格布局                                                   |
| **Swiper**   | Banner 轮播、公告轮播、壁纸预览滑动                                    |
| **SCSS**     | 公共变量及页面样式管理                                              |

### 数据与网络请求

项目通过统一的 `request.js` 对 `uni.request` 进行封装，并在 `api/apis.js` 中进一步封装具体业务接口。


### 项目架构

项目整体采用较为清晰的模块化结构：

```text
wallPaper/
├── api/                    # API 接口封装
│   └── apis.js
│
├── common/                 # 公共资源
│   ├── images/             # 公共图片
│   └── style/              # 公共 SCSS 样式
│
├── components/             # 公共组件
│   ├── common-title/       # 公共标题组件
│   ├── custom-nav-bar/     # 自定义导航栏
│   └── theme-item/         # 专题/分类卡片
│
├── pages/                  # 页面
│   ├── index/              # 首页
│   ├── classify/           # 分类
│   ├── classlist/          # 壁纸列表
│   ├── preview/            # 壁纸预览
│   ├── search/             # 壁纸搜索
│   ├── user/               # 个人中心
│   └── notice/             # 公告
│
├── static/                 # 静态资源
│
├── utils/                  # 工具函数
│   ├── request.js          # 网络请求封装
│   ├── system.js           # 系统及导航栏相关处理
│   └── common.js           # 公共工具方法
│
├── App.vue                 # 应用入口
├── main.js                 # Vue 应用入口
├── manifest.json           # uni-app 应用配置
└── pages.json              # 页面及 TabBar 配置
```

---

## 🖥️ 项目效果图

### 🏠 首页

> 在这里添加首页效果图

---<img width="504" height="800" alt="image" src="https://github.com/user-attachments/assets/a9eb3aab-a777-4522-ae24-ee89246595e4" />


### 🗂️ 壁纸分类

> 在这里添加分类页面效果图

---<img width="445" height="794" alt="image" src="https://github.com/user-attachments/assets/dae176e6-9074-4955-8105-cdbd9a859907" />



### 🔍 壁纸搜索

> 在这里添加搜索页面效果图

---<img width="394" height="791" alt="image" src="https://github.com/user-attachments/assets/3def34d9-f07e-4165-95fe-14ebd1706a49" />



### 👀 壁纸预览

> 在这里添加壁纸预览效果图

---<img width="476" height="815" alt="image" src="https://github.com/user-attachments/assets/4b09f917-7f72-433b-a317-cb93fcbbf167" />
<img width="485" height="869" alt="image" src="https://github.com/user-attachments/assets/dc371723-36dd-43d2-a456-e4a50324a1c6" />
<img width="459" height="814" alt="image" src="https://github.com/user-attachments/assets/942def7e-005f-457a-ac8f-2f893a955716" />
<img width="376" height="800" alt="image" src="https://github.com/user-attachments/assets/7706c11f-d231-4e02-ba3f-d321f0e5e85c" />




### 👤 个人中心

> 在这里添加个人中心效果图

---<img width="380" height="765" alt="image" src="https://github.com/user-attachments/assets/f5f440d0-f417-474e-bf77-886517d6ab38" />


## 📌 项目特点

* 使用 **Vue 3 Composition API** 进行开发
* 使用 `<script setup>` 简化 Vue 组件开发
* 采用组件化思想封装公共 UI
* 对网络请求进行统一封装
* 使用本地缓存保存搜索历史及壁纸列表数据
* 使用分页方式加载壁纸数据
* 使用 `Swiper` 实现壁纸左右切换
* 对壁纸预览进行简单的图片预加载处理
* 使用 uni-app 条件编译适配不同平台
* 使用自定义导航栏提升页面视觉效果
* 使用 SCSS 统一管理项目公共样式及主题色

---

## 🚀 项目运行

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/wallPaper.git
```

### 2. 使用 HBuilderX 打开项目

使用 **HBuilderX** 导入项目，并安装项目所需要的 uni-app / uni-ui 相关依赖。

### 3. 运行项目

可以根据实际需求选择运行平台：

```text
运行 → 运行到浏览器
```

或者：

```text
运行 → 运行到小程序模拟器 → 微信开发者工具
```

---

## 📄 License

本项目仅用于个人学习、技术交流以及前端开发学习。

如项目中的图片、接口或其他资源涉及版权问题，请联系项目维护者进行处理。
