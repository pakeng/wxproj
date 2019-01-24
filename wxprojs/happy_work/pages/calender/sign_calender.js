//logs.js
const util = require('../../utils/util.js')
const constants = require('../../constants/constant.js').constants
const calendar = require('../../utils/calendar.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: []
  },
  onLoad: function() {
    this.dateInit();
  },
  dateInit: function() {
    let dateTable = calendar.getCalendarTable(new Date())
    this.dye(dateTable)
    this.setData({
      dateArr: dateTable
    })
  },
  day_click: function(e) {
    let day = e.currentTarget.dataset['day'];
  },
  dye: function (dateTable) {
    let date = new Date();
    let prx = date.getFullYear() + "_" + date.getMonth();
    let records = wx.getStorageSync(constants.RECORD_NAME + prx) || []
    if (records.length == 0) {
      return;
    }
    let j = 0;
    for (let i = records[j].day; i < 35 && j < records.length; i++) {
      if (dateTable[i].value != '') {
        if (dateTable[i].value == records[j].day) {
          dateTable[i].type+=1;
          j++;
          if (j < records.length && dateTable[i].value == records[j].day) {
            if (new Date(records[j].date).getHours()>=18){
              dateTable[i].type += 1;
            }
            j++;
          }
        }
      }
    }
  }
})