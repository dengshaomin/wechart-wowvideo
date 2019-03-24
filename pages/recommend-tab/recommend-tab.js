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
      this.toolanimation = wx.createAnimation()
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
    isplaying: true,
    videobean: null,
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
      videoContext = wx.createVideoContext(e.detail.current + "", this);
      setTimeout(function() {
        videoContext.play()
      }, 200);

      this.setData({
        playindex: e.detail.current
      });
    },
    bindplay: function(e) {


      for (let i = 0; i < this.data.videobean.videourls.length; i++) {
        this.data.videobean.videourls[i].isplaying = i == this.data.playindex;
      }
      this.setData({
        videobean: this.data.videobean,
        isplaying: true
      })
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

    bindpause: function() {
      this.setData({
        isplaying: false
      });
    },
    // onPullDownRefresh: function() {
    //   setTimeout(function() {
    //     wx.stopPullDownRefresh();
    //   }, 2000);
    // },
    iconclick: function() {

    },
    likeclick: function() {
      this.data.videobean.videourls[this.data.playindex].likecount += this.data.videobean.videourls[this.data.playindex].liked ? -1 : 1;
      this.data.videobean.videourls[this.data.playindex].liked = this.data.videobean.videourls[this.data.playindex].liked == 1 ? 0 : 1;
      this.setData({
        videobean: this.data.videobean
      });
    },
    attentionclick: function() {
      this.data.videobean.videourls[this.data.playindex].attentioncount += this.data.videobean.videourls[this.data.playindex].attentioned ? -1 : 1;
      this.data.videobean.videourls[this.data.playindex].attentioned = this.data.videobean.videourls[this.data.playindex].attentioned == 1 ? 0 : 1;
      this.setData({
        videobean: this.data.videobean
      });
    },

    commentclick: function(e) {
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
        videobean: e,
      })

    },
    bindtransition: function(e) {
      this.toolanimation.opacity(0).step()
      this.setData({
        toolanimation: this.toolanimation.export(),

      })
    },
    bindanimationfinish: function(e) {
      this.toolanimation.opacity(1).step()
      this.setData({
        toolanimation: this.toolanimation.export(),

      })
    },

  },

})