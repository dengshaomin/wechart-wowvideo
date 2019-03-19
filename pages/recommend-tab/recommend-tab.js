// pages/recommend-tab/recommend-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    playindex: 0,
    isplaying: false,
    videoUrls: [{
      id: 0,
      url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      autoplay: false
    }, {
      id: 1,
      url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/1bc0d0764f92786699cc416d9f8d7ef.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553000743&Signature=S4wrAFbs5anxIyCCWeTATM%2B%2F4r8%3D',
      autoplay: false
    }, {
      id: 2,
      url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/2d4625f6155ff7187c366280d6abcda6.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553000755&Signature=SUJT6%2FmCecSifm99uriL%2BRdL6%2F4%3D',
      autoplay: false
    }],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    vertical: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function(e) {
      var videoContext = wx.createVideoContext(this.data.playindex + "",this);
      videoContext.pause();
      videoContext.seek(0);
      videoContext = wx.createVideoContext(e.detail.current + "");
      // setTimeout(function() {
      videoContext.play()
      // }, 200);

      this.setData({
        playindex: e.detail.current
      });
    },
    videoSignalTab: function(e) {
      this.triggerEvent('customevent', {}, { bubbles: true })

      var videoContext = wx.createVideoContext(this.data.playindex + "",this);

      if (this.data.isplaying) {
        videoContext.pause();
      } else {
      
        videoContext.play();
      }
    },
    videoPlay: function() {

      this.setData({
        isplaying: true
      });
    },
    videoPause: function() {

      this.setData({
        isplaying: false
      });
    },
    onPullDownRefresh: function() {
      setTimeout(function() {
        wx.stopPullDownRefresh();
      }, 2000);
    }
  },

})