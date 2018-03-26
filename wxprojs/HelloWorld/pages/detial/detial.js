// pages/detial.js
var posts = require('../../Entities/testData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title : "这是标题",
    content: "这是内容",
    post : posts
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      content: 'LOVE　ＹＯＵ　ＹＹ　^_^　！'
      })
    console.log(posts);
    this.setData({
      post: posts.PostList
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("Hello");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  onItemClick: function(event){
    console.log("clicked Item id =  " + event.currentTarget.dataset.id);
  }

})