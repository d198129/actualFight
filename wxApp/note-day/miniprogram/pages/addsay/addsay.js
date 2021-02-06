// miniprogram/pages/addsay/addsay.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '1'
  },

  onChange(e){
    console.log(123);
    this.setData({
      value: e.detail.value
    })
  },

  addsay() {
    Dialog.confirm({
      title: '操作',
      message: '确认退出吗',
    })
      .then(async () => {
        // on confirm
        try {
          console.log(456);
        } catch(e) {
          console.log(e);
        }
      })
      .catch(() => {
        // on cancel
        Toast.fail({message:'取消操作',forbidClick: true,})
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