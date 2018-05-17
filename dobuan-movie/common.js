var DOMAIN = 'http://t.yushu.im/'

var API_hot = DOMAIN + 'v2/movie/in_theaters'

const API = [{
    category: '正在热映',
    url: 'http://t.yushu.im/v2/movie/in_theaters'
}, {
    category: '即将上映',
    url: 'http://t.yushu.im/v2/movie/coming_soon'
}, {
    category: 'top250',
    url: 'http://t.yushu.im/v2/movie/top250'
}]
// wx.request返回一个requestTask，可以中断请求，所以不可能返回success函数的函数的返回值
// function requestAPI(url) {
//   return wx.request({
//     url: url,
//     success:function(res){
//       return res.data
//     }
//   })
// }

function requestAPI(url,callback) {
  wx.request({
    url: url,
    success:function(res){
      callback(res.data)
    }
  })
}

const star = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1]
]

function addStarArray(obj) {
  for (let i = 0; i < obj.length; i++) {
    let stars = obj[i].rating.stars
    obj[i].rating['star'] = star[Math.round(stars / 10)]
  }
}


module.exports = {
  API:API,
  requestAPI: requestAPI,
  addStarArray: addStarArray
}