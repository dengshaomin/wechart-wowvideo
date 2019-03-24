// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentAttach: false,
    selected: 0,
    color: "#bbb",
    selectedColor: "#fff",
    tablist: [{
      pagePath: "/recommend-tab/recommend-tab",

      text: "推荐"
    }, {
      pagePath: "/attention-tab/attention-tab",

      text: "关注"
    }, {
      pagePath: "/attention-tab/attention-tab",

      text: "消息"
    }, {
      pagePath: "/attention-tab/attention-tab",

      text: "我的"
    }],
    
    videobean: {
      videourls: [{
        liked: 0,
        commentcount: 0,
        likecount: 0,
        sharecount: 0,
        attentioncount: 0,
        attentioned: 0,
        usericon: 'https://wechart-miniprogram-res-static.oss-cn-shanghai.aliyuncs.com/shortvideo/authoricons/11405dc79ed482afcef1a8961d1aa760.jpeg',
        id: 0,
        cover: 'https://wechart-miniprogram-res-static.oss-cn-shanghai.aliyuncs.com/shortvideo/covers/1062a948f5328771ec981bde1183c5a.jpeg',
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        autoplay: false,
        isplaying: false,
      }, {
        liked: 0,
        commentcount: 0,
        likecount: 0,
        sharecount: 0,
        attentioncount: 0,
        attentioned: 0,
        usericon: 'https://wechart-miniprogram-res-static.oss-cn-shanghai.aliyuncs.com/shortvideo/authoricons/11405dc79ed482afcef1a8961d1aa760.jpeg',
        id: 1,
        cover: 'https://wechart-miniprogram-res-static.oss-cn-shanghai.aliyuncs.com/shortvideo/covers/1062a948f5328771ec981bde1183c5a.jpeg',
        url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/575de9b288ce3eecfc2344617314f17.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553439594&Signature=dOa3VQTcUMkpgjjCdt8J%2B0nZ4yA%3D',
        autoplay: false,
        isplaying: false,
      }, {
        liked: 0,
        commentcount: 0,
        likecount: 0,
        sharecount: 0,
        attentioncount: 0,
        attentioned: 0,
        usericon: 'https://wechart-miniprogram-res-static.oss-cn-shanghai.aliyuncs.com/shortvideo/authoricons/11405dc79ed482afcef1a8961d1aa760.jpeg',
        id: 2,
        cover: 'https://wechart-miniprogram-res-static.oss-cn-shanghai.aliyuncs.com/shortvideo/covers/1062a948f5328771ec981bde1183c5a.jpeg',
        url: 'https://wechart-miniprogram-res.oss-cn-shanghai.aliyuncs.com/shortvideo/videos/5873b2d55bc6265beb945c2549c50d7.mp4?OSSAccessKeyId=LTAINaTr6dvDeEfe&Expires=1553439619&Signature=P67Rd%2FfLo5ReCCSwalJhtpx8%2B%2Fw%3D',
        autoplay: false,
        isplaying: false,
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animation = wx.createAnimation()
    this.recommendtab = this.selectComponent("#recommendtab"); //组件的id
    this.recommendtab.setComponentData(this.data.videobean)   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.hidecommentlist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    wx.updateShareMenu({
      withShareTicket: true,
      success(e) {
        console.log('success')
        console.log(e)
      },
      fail(e) {
        console.log('error')
        console.log(e)
      }
    })
    return {
      title: this.data.videobean.videourls[this.data.selected].des, // 小程序的名称
      path: '/pages/home/home?video_id=12345', // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: this.data.videobean.videourls[this.data.selected].cover, //自定义图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
    };
  },
  switchTab: function(e) {
    console.log(e)
    this.setData({
      selected: e.currentTarget.dataset.index
    })
  },
  pageEventListener1: function(e) {

  },
  disableTabMove: function(e) {
    return false;
  },

  commentclick: function(e) {

    if (this.data.commentAttach) {
      this.hidecommentlist()
      return;
    }
    console.log('hide')
    wx.hideShareMenu()
    var item = wx.createSelectorQuery();
    var that = this;
    item.select('.comment_list_container').boundingClientRect() //里面需要绑定 view组件的id
    item.exec(function(res) { //res为绑定元素信息的数组
      that.animation.translateY(-res[0].height).step()
      that.setData({
        animation: that.animation.export(),
      })
      that.data.commentAttach = true;
    })
    let id = e.detail.id
    if (id != null) {
      console.log('nnnnn')
      wx.request({
        url: '',
      })
    }
  },
  commentlistclick: function(e) {
    this.hidecommentlist()
  },
  hidecommentlist: function(e) {
    wx.showShareMenu()
    var item = wx.createSelectorQuery();
    var that = this;
    item.select('.comment_list_container').boundingClientRect() //里面需要绑定 view组件的id
    item.exec(function(res) { //res为绑定元素信息的数组
      that.animation.translateY(res[0].height).step()
      that.setData({
        animation: that.animation.export(),

      })
      that.data.commentAttach = false;
    })

    this.recommendtab.hidecommentlist()
  },
  bindtransition: function(e) {

  },


})