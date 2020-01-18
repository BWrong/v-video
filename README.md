# v-videojs
![npm](https://img.shields.io/npm/dt/v-videojs)
![npm](https://img.shields.io/npm/v/v-videojs)
![NPM](https://img.shields.io/npm/l/v-videojs)
![GitHub stars](https://img.shields.io/github/stars/bwrong/v-video?style=social)

基于videojs封装的Vue指令，简化videojs创建流程
### 使用方法

为了兼容原生video标签，在原生video标签上加上`v-video`指令即可，然后通过props传入参数
```js
import videojs from 'video.js'; // 需要依赖video.js
import 'video.js/dist/video-js.css'
import video from 'v-videojs';
import lang from 'video.js/dist/lang'
videojs.addLanguage('zh-CN', lang);
Vue.use(video, {
    onlyOnePlay: true, // 是否同时只允许一个播放
    // options... 可接受video.js配置项
})
```
```html
 <video v-video controls poster="./assets/img/img1.jpg">
    <source  src="/demo.mp4" type="video/mp4">
</video>
```

### API

#### Directive

|名称|说明|
|---|---|
|`v-video`|将元素初始化为videojs播放器|

#### Props

|属性|必须|说明|类型|默认值|
|---|---|---|---|---|
|src|yes|视频文件的路径，路径相对与根目录|String||
|poster|no|封面文件的路径，路径相对与根目录|String|视频第一帧|
|width|no|播放器宽度|String|100%|
|height|no|播放器高度|String|100%|
|controls|no|是否显示播放器控件|Boolean|false|
|autoplay|no|自动播放|Boolean|false|
|preload|no|预加载,可选项：'auto'、'metadata'、'none'|String|'auto'|
|muted|no|静音|Boolean|false|

#### Methods

正常来说，上述API能够满足日常使用，如果需要使用videojs的方法及其他高级用法，可采用如下方式：
1. 使用ref标识元素，名字可以自定义

```html
<!-- html -->
<video v-video controls poster="./assets/img/img1.jpg" ref="video">
    <source  src="/demo.mp4" type="video/mp4">
</video>
```
2. 获取对应的videojs实例

```js
// js
// 这里的例子使用计算属性computed，也可直接使用this.$refs.video.videoPlayer
computed: {
    videoPlayer: function () {
        return this.$refs.video.videoPlayer;
    }
},
```
3. 使用videojs实例上的属性和方法，一般在mounted生命周期使用

所有官方的方法均可使用，具体用法见[官方文档](https://videojs.com)。

```js
// 播放
this.videoPlayer.play();
// 暂停
this.videoPlayer.pause();
// 销毁
this.videoPlayer.dispose();
// 事件监听
this.videoPlayer.on(eventName,fn);
// 触发事件
this.videoPlayer.trigger(eventName);
// 更多用法见官方文档
```
