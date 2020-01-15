import videojs from 'videojs';
import { getAttrValue } from './utils';

function readyCallBack(autofullscreen) {
  return function() {
    var _this = this;
    // this.on('ended', function () { });
    this.on('play', function() {
      autofullscreen && this.requestFullscreen();
      // 暂停其他视频
      var videolist = document.querySelectorAll('.video-js');
      Array.prototype.forEach.call(videolist, function(item) {
        if (item !== _this.el_) {
          videojs(item).pause();
        }
      });
    });
  };
}
function install(Vue, options) {
  Vue.directive('video', {
    // 指令第一次绑定到元素时调用
    bind: function (el, binding, vnode) {
        // 添加样式
        el.className += ' video-js vjs-fill vjs-big-play-centered vjs-show-big-play-button-on-pause';
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中
    inserted: function (el, binding, vnode) {
        var attrs = vnode.data.attrs;
        var videoPlayer = videojs(el, {
            width: attrs.wdith || '100%',
            height: attrs.height || '100%',
            responsive: true,
            controls: getAttrValue(attrs.controls),
            autoplay: getAttrValue(attrs.autoplay),
            preload: attrs.preload || 'auto',
            loop: getAttrValue(attrs.loop),
            muted: getAttrValue(attrs.muted),
            poster: attrs.poster || '',
            playbackRates: [0.5, 1, 1.5, 2],
            fluid: true,
            // fill: true,
            sources: [{
                src: attrs.src
            }],
            language: 'zh-CN'
        }, readyCallBack(getAttrValue(attrs.autofullscreen)));
        el.videoPlayer = videoPlayer;
    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
    update: function () {},
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function () {},
    // 只调用一次，指令与元素解绑时调用
    unbind: function () {}
  });
}

export default {
  install
};
