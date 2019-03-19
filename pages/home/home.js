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

  },
  switchTab: function(e) {
    console.log(e)
    this.setData({
      selected: e.currentTarget.dataset.index
    })
  },
  pageEventListener1: function(e) {
    
  },
})