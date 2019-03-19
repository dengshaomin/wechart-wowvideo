//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    playindex: 0,
    videoUrls: [{
      id: 0,
      url: 'http://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/171c527fadf5278aa566496b86d26048.mp4?Expires=1552933989&OSSAccessKeyId=TMP.AQF_R9X7Cegh7X8X79r7qJigqbCgY8pRSBqQnslFt6D5gx0w47L97iajfKmzADAtAhUA8b7vPnL2iG7iBH4nq9Lsqja4ynUCFDAWpoEokebwWeoG0m-MOwAJ0Q0y&Signature=ANsueyx%2Bh2MndwsxdlKGHR6tPbM%3D',
      autoplay: true
    }, {
      id: 1,
      url: 'http://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/1bc0d0764f92786699cc416d9f8d7ef.mp4?Expires=1552933924&OSSAccessKeyId=TMP.AQF_R9X7Cegh7X8X79r7qJigqbCgY8pRSBqQnslFt6D5gx0w47L97iajfKmzADAtAhUA8b7vPnL2iG7iBH4nq9Lsqja4ynUCFDAWpoEokebwWeoG0m-MOwAJ0Q0y&Signature=NSwFqk2vQLWwZ%2B%2FAr4lONl1Xrjw%3D',
      autoplay: false
    }, {
      id: 2,
      url: 'http://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/2e82ca5aca0ff615b125148cc06512.mp4?Expires=1552933947&OSSAccessKeyId=TMP.AQF_R9X7Cegh7X8X79r7qJigqbCgY8pRSBqQnslFt6D5gx0w47L97iajfKmzADAtAhUA8b7vPnL2iG7iBH4nq9Lsqja4ynUCFDAWpoEokebwWeoG0m-MOwAJ0Q0y&Signature=UpxQTKERur8%2BBBgRTekF6xoCLrI%3D',
      autoplay: false
    }],
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
    var videoContext = wx.createVideoContext(this.data.playindex+"");
    videoContext.pause();
    videoContext.seek(0);
    videoContext = wx.createVideoContext(e.detail.current + "");
    videoContext.play();
    this.setData({playindex:e.detail.current});
    // for (var i = 0; i < this.data.videoUrls.length; i++) {
    //   setTimeout(function() {
    //     var videoContext = wx.createVideoContext(e.detail.current + "")
    //     if (i == e.detail.current) {
    //       console.log("==" + current)
    //       videoContext.play()
    //     } else {
    //       videoContext.stop()
    //     }
    //   }, 2000)
    // }
    // var videoContextPrev = wx.createVideoContext(e.detail.current)
    // videoContextPrev.play();

    // for (var i = 0; i < this.data.videoUrls.length; i++) {
    //   this.data.videoUrls[i].autoplay = e.detail.current == i;
    //   var videoContextPrev = wx.createVideoContext(i + "")
    //   videoContextPrev.stop()
    //   console.log(videoContextPrev)
    //   // console.log(videoContextPrev)
    //   // if (i != e.detail.current) {
    //   //   videoContextPrev.stop();
    //   // } else {
    //   //   videoContextPrev.play();
    //   // }
    // }

    // this.setData({
    //   videoUrls: this.data.videoUrls
    // })
    // console.log(this.data.videoUrls)
    // videoUrls.get(e.detail.current).
    // console.log(e.detail.current)
  }
})