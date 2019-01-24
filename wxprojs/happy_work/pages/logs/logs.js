//logs.js
const util = require('../../utils/util.js')
const calendar = require('../../utils/calendar.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: []
  },
  onLoad: function () {
    this.dateInit();
  },
  dateInit: function () {
    let dateTable = calendar.getCalendarTable(new Date())
    for(let i=0;i<35; i++){
      if(dateTable[i].value!=''){
        if (dateTable[i].value>2){
          dateTable[i].type = 1;
        }
        if (dateTable[i].value > 10) {
          dateTable[i].type = 2;
        }
        if (dateTable[i].value > 15) {
          dateTable[i].type = 0;
        }
      }
    }
    this.setData({
      dateArr: dateTable
    })
  },
  day_click: function(e){
    let day = e.currentTarget.dataset['day'];
    console.log("day = "+day);
  }
})
