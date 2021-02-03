// miniprogram/pages/day/day.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    days: []
  },

  addday(){
    wx.navigateTo({url: '/pages/addday/addday',
      fail: (e)=>{console.log(e);},
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('day').orderBy('mouth','asc').orderBy('day','asc').get().then(res => {
      console.log(res);
      let days = res.data;
      this.setData({
        days
      })
    })
    // db.collection('day').add({
    //   // data 字段表示需新增的 JSON 数据
    //   data: {
    //     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    //     description: "learn cloud database",
    //     due: new Date("2018-09-01"),
    //     done: false
    //   },
    //   success: function(res) {
    //     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    //     console.log(res)
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
  onPullDownRefresh: async function () {
    await db.collection('day').orderBy('mouth','asc').orderBy('day','asc').get().then(res => {
      console.log(res);
      let days = res.data;
      this.setData({
        days
      })
    })
    wx.stopPullDownRefresh();
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