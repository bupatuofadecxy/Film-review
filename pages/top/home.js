// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: { //参与页面渲染的数据
    top: null
  },
  //获取top榜数据
  getTop: function () {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: (res) => {
        console.log(res.data),
          this.setData({
            top: res.data
          })
          //本地存储数据
          wx.setStorage({
            key: 'top',
            data: res.data,
          })
      },
      //接口调用结束回调的函数
      fail: function (res) { },
      complete: function (res) { }
    })
  },

  //跳转到详情页面
  goToDetails: function (event) {
    var id = event.currentTarget.dataset.info.id
    var title = event.currentTarget.dataset.info.title
    wx.navigateTo({
      url: '/pages/details/index?id=' + id + '&title=' + title,
    })
    console.log(event.currentTarget.dataset.info.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTop()
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