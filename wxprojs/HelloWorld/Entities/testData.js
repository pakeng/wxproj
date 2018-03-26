const postBean = require('postEntity.js')
const util = require('../utils/util.js')
var postlist = [];

for(var i=0;i<15;i++){
  postlist[i] = new postBean();
  postlist[i].title = "Title"+i;
  postlist[i].date = util.formatTime(new Date());
  postlist[i].id = 99 - i;
}


module.exports = {

  PostList: postlist

}