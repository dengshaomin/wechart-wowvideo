// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentAttach: false,
    selected: 0,
    color: "#7e7e7e",
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
    this.recommendtab.setComponentData(this.data.videoBean)
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
      title: "转发的标题", // 小程序的名称
      path: '/pages/home/home?video_id=12345', // 默认是当前页面，必须是以‘/’开头的完整路径
      imgUrl: 'https://sponsor-static.segmentfault.com/8552c525b1f77f394dc07b64cd71cf11.png', //自定义图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4


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