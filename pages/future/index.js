// pages/future/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newMessage: null
  },
  //获取即将上映api
  getNewMessage:function() {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: (res) => {
        console.log(res.data),
          this.setData({
            newMessage: res.data
          })
        //数据存储到本地
        wx.setStorage({
          key: "newMessage",
          data: res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {}
    })

  },
  //跳转到详情页
  goToDetails: function(event) {
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
  onLoad: function(options) {
     this.getNewMessage()
    // if (!this.data.cache) {
    //   this.getNewMessages()
    //   console.log('已获数据')
    // } else {
    //   console.log('还没缓存')
    // }
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

}
})