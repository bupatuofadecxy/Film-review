// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: null,
    cache: false,
    isFold: false,
    editText: '展开',
    slideWidth: '', //滑块宽
    slideLeft: 0 , //滑块位置
    totalLength: '',//当前滑动列表总厂
    slideShow: false,
    slideRatio: '',
  },
  
  //获取最近热映数据
  getMessages: function (sid) {
  
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + sid,
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
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //点击事件展示全部收起
  isFold:function(){
    //  this.setData({
    //    isFold: !this.data.isFold,
    //    editText: '收起',
    //  })
    //this.data用来获取页面对象 this.setData用来更新页面对象
    if(this.data.isFold == true) {
      this.setData({
        isFold: false,
        editText: '展开',
      })
    }else{
      this.setData({
        isFold:true,
        editText: '收起',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessages(options.id)
    console.log(options)
  //动态显示当前页面navigationbar
    wx.setNavigationBarTitle({
      title:options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
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