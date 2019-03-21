// pages/recommend-tab/recommend-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    attached() {
      this.commentAttach = false;
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
   
    playindex: 0,
    isplaying: false,
    videoBean: {
      liked: 0,
      commentCount: 0,
      likeCount: 0,
      shareCount: 0,
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
      }]
    },
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
      var videoContext = wx.createVideoContext(this.data.playindex + "", this);
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
      if (this.data.commentAttach) {
        this.triggerEvent('commentclick', {
          
        })
        return;
      }

      var videoContext = wx.createVideoContext(this.data.playindex + "", this);

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
      this.data.videoBean.likeCount += this.data.videoBean.liked ? -1 : 1;
      this.data.videoBean.liked = this.data.videoBean.liked == 1 ? 0 : 1;
      this.setData({
        videoBean: this.data.videoBean
      });
    },
    commentClick: function(e) {
      this.data.commentAttach = !this.data.commentAttach;
      this.triggerEvent('commentclick', {
        id: e.currentTarget.id
      })
    },
    hidecommentlist(){
      this.data.commentAttach = false;
    }

  },

})