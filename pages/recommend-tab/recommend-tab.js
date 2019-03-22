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
    videoBean: null,
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
    // onPullDownRefresh: function() {
    //   setTimeout(function() {
    //     wx.stopPullDownRefresh();
    //   }, 2000);
    // },
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
    hidecommentlist() {
      this.data.commentAttach = false;

    },
    setComponentData: function(e) {
      this.setData({
        videoBean: e
      })
    }


  },

})