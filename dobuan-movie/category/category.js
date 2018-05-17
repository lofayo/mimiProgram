// dobuan-movie/category/category.js

const common = require('../common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesCategory: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    let tempArr = []
    let commonAPI = common.API
    let requestAPI = common.requestAPI
    function handleData(json,dataKey){
      let temp = []
      temp.push(json)
      _this.setData({
        moviesCategory: temp
      }, () => {
        console.log(_this.data.dataKey)
      })
    }
    // 测试封装wx.request的函数
    let res = requestAPI('http://t.yushu.im/v2/movie/in_theaters', handleData)
    return;
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
    function setMoviesCategory() {

    }
    
    for (let i = 0; i < commonAPI.length; i++) {
      wx.request({
        url: commonAPI[i].url +'?start=0&count=3',
        success: function (res) {
          var resData = res.data
          resData['category'] = commonAPI[i].category
          tempArr.push(resData)
          _this.setData({
            moviesCategory: tempArr
          })
        }
      })
      // let resData = requestAPI(commonAPI[i].url)
      // resData['category'] = commonAPI[i].category
      // tempArr.push(resData)
      // _this.setData({
      //   moviesCategory: tempArr
      // })
      // console.log(_this.data.moviesCategory)
    }
    // wx.request({
    //   url: 'http://t.yushu.im/v2/movie/in_theaters?start=0&count=3', 
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     var resData = res.data
    //     resData['category'] = '正在热映'
    //     var tempArr = []
    //     tempArr.push(resData)
    //     console.log(tempArr)
    //     _this.setData({
    //       moviesCategory: tempArr
    //     })
    //     // _this.data.moviesCategory=resData.subjects
    //     // _this.data.moviesCategory.push(resData)
    //     console.log(_this.data.moviesCategory)
    //   }
    // })
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

  },

  /**
   * 进入电影子页面
   */
  toMovieLists: function (e) {
    console.log(e)
    let category_id = e.currentTarget.dataset.category_id
    wx.navigateTo({
      url: "/dobuan-movie/movie-lists/movie-lists?category_id="+category_id,
    })
  }
})