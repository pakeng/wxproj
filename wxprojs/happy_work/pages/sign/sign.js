// pages/sign/sign.js
const constants = require('../../constants/constant.js').constants;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
  sign_click: function() {
    let date = new Date();
    this.write(date);
    // test
    // let d = new Date();
    // d = d - 1000 * 60 * 60 * 24;
    // let date0 = new Date(d);
    // d = d - 1000 * 60 * 60 * 24;
    // let date1 = new Date(d);
    // this.write(date1);
    // this.write(date0);
    // this.write(date0);
    // this.write(new Date())
  },
  write: function(date){
    let prx = date.getFullYear() + "_" + date.getMonth();
    let records = wx.getStorageSync(constants.RECORD_NAME + prx) || []

    let record_value = {
      day: date.getDate(),
      date: date
    }
    console.log("records length = " + records.length)
    for (let i = records.length - 1; i >= 0; i--) {
      if (records[i].day == date.getDate() && i > 0) {
        console.log("record =" + JSON.stringify(records[i]))
        if (records[i - 1].day == date.getDate()) { // 如果当前记录的最后一条是今天的记录，并且前一条也是那么用新的记录覆盖最后这条
          console.log("打卡记录最后一条： " + JSON.stringify(records[i]))
          records[i] = record_value;
          break;
        }
      } else {
        records.push(record_value)
        console.log("打卡记录已经保存： " + JSON.stringify(record_value))
        break;
      }
    }

    if (records.length == 0) {
      records.push(record_value);
    }
    console.log("打卡")
    wx.setStorageSync(constants.RECORD_NAME + prx, records)
  }
})