// pages/test/test.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    messages: null,
    cache: false,
    // grade: null,//星级评分
  },
  //获取最近热映数据
  getMessages: function() {
   
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      // url: 'http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      //这个地方要用胖箭头函数
      success: (res) => {
        console.log(res.data),
        // console.log(JSON.parse(res.data.id))
          this.setData({
            messages: res.data
          })
        //数据本地存储
        wx.setStorage({
          key: 'messages',
          data: res.data,
        })
        this.setData({
          cache: true
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //跳转到详情页面
  goToDetails: function(event) {
    var id = event.currentTarget.dataset.info.id
    var title = event.currentTarget.dataset.info.title
    // let index = parseInt(event.currentTarget.dataset.index);
    // let staffId = this.data
    // var detailsData = JSON.stringify(messages);
    //使用encodeURIComponent转码
    // detailsData = encodeURIComponent(detailsData)
    wx.navigateTo({
      url: '/pages/details/index?id=' + id + '&title=' + title,
    })
    console.log(event.currentTarget.dataset.info.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取数据 判断是否是第一次获取数据 如果没有本地存储数据 则获取数据并缓存到本地
    if (!this.data.cache) {
      this.getMessages()
      console.log('已获数据')
    }else{
      console.log('还没缓存')
    }
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function() {
    this.getMessages()
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