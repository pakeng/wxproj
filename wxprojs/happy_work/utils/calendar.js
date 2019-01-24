const calendar = date => {
  let dateArr = [];						//需要遍历的日历数组数据
  let arrLen = 0;							//dateArr的数组长度
  let year = date.getFullYear();
  let nextYear = 0;
  let month = date.getMonth();					//没有+1方便后面计算当月总天数
  let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
  let startWeek = new Date('' + year + ',' + (month + 1) + ',1').getDay();							//目标月1号对应的星期
  let dayNums = new Date(year, nextMonth, 0).getDate();				//获取目标月有多少天
  if (month + 1 > 11) {
    nextYear = year + 1;
    dayNums = new Date(nextYear, nextMonth, 0).getDate();
  }
  arrLen = startWeek + dayNums;
  for (let i = 0; i < arrLen; i++) {
    dateArr[i] = { value: "", type: 0 };
    if (i >= startWeek) {
      dateArr[i].value = i - startWeek + 1;
    }
  }
  for (let i = arrLen; i < 35; i++) {
    dateArr[i] = { value: "", type: 0 };
  }
  return dateArr;
}

module.exports = {
  getCalendarTable: calendar
}