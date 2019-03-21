//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    playindex: 0,
    isplaying: false,
    videoBean: {
      videoUrls: [{
        id: 0,
        url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/171c527fadf5278aa566496b86d26048.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553000721&Signature=2NCqn5M9lgjF8lgeol6CDKvBItw%3D',
        autoplay: false
      }, {
        id: 1,
        url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/1bc0d0764f92786699cc416d9f8d7ef.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553000743&Signature=S4wrAFbs5anxIyCCWeTATM%2B%2F4r8%3D',
        autoplay: false
      }, {
        id: 2,
        url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/2d4625f6155ff7187c366280d6abcda6.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553000755&Signature=SUJT6%2FmCecSifm99uriL%2BRdL6%2F4%3D',
        autoplay: false
      }]
    },

    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    vertical: true,
  },

  onReady: function(res) {



  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  swiperChange: function(e) {
    var videoContext = wx.createVideoContext(this.data.playindex + "");
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
    var videoContext = wx.createVideoContext(this.data.playindex + "");
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
  },
  iconClick: function() {

  },
  likeClick: function() {

  },
  commentClick: function() {

  },
  shareClick: function() {
    this.triggerEvent('shareevent', {})
  },

})