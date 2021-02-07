// miniprogram/pages/index/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    height: 68,
    daysay: []
  },
  
  onClose(event) {
    console.log(event);
    const { position, instance, name } = event.detail;
    switch (position) {
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？'
        }).then(() => {
          wx.cloud.callFunction({
            name: 'delsay',
            data: {
              name: name
            }
          }).then(res => {
            console.log(res);
            let daysay = this.data.daysay.filter(item => item._id !== name);
            this.setData({
              daysay
            })
          })
          instance.close();
        });
        break;
    }
  },

  add() {
    wx.navigateTo({
      url: '/pages/addsay/addsay'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let query = wx.createSelectorQuery();
    // query.select('#swipe-cell').boundingClientRect(rect=>{
    //   let height = rect.height;
    //   this.setData({
    //     height
    //   })
    // }).exec();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    db.collection('say').orderBy('year','desc').orderBy('mouth','desc').orderBy('day','desc').orderBy('houre','desc').orderBy('min','desc').get().then(res => {
      let say = res.data;
      let daysay = [];
      for(let i of say){
        daysay.push({
          _id: i._id,
          say: i.say,
          title: i.year + '-' + i.mouth + '-' + i.day + ' ' + i.houre + ':' + i.min
        })
      }
      this.setData({
        daysay
      })
    })
    const userinfo = wx.getStorageSync('userInfo');
    this.setData({
      userinfo
    })
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