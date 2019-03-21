// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    color: "#7e7e7e",
    selectedColor: "#fff",
    list: [{
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
    }]
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
  }
})