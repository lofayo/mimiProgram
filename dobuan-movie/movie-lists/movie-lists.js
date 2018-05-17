// dobuan-movie/movie-lists/movie-lists.js
const common = require('../common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    let category_id = options.category_id
    // 提取movies数据的stars字段，转成能直接渲染的star
    function convertStars() {
      var movies = _this.data.movies
      for (let i = 0; i < movies.length; i++) {
        let star = Math.round(movies[i].rating.stars / 10)
        let init = [0, 0, 0, 0, 0]
        for (let j = 0; j < star; j++) {
          init[j] = 1;
        }
        movies[i]['convertStars'] = init.join('')
      }
    }
    var commonAPI = common.API
    wx.request({
      url: commonAPI[category_id].url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var movies = res.data.subjects
        _this.setData({
          movies: movies
        })
      }
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
  
  }
})