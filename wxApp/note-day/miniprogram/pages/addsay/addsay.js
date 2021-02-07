// miniprogram/pages/addsay/addsay.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
  },

  onChange(e){
    this.setData({
      value: e.detail.value
    })
  },

  addsay() {
    Dialog.confirm({
      title: '发表',
      message: '确认发表吗',
    })
      .then(async () => {
        // on confirm
        try {
          if(!this.data.value){
            Toast.fail({message:'请输入非空字符',forbidClick: true,})
          }
          let year = new Date().getFullYear();
          let mouth = new Date().getMonth() + 1;
          let day = new Date().getDate();
          let houre = new Date().getHours();
          let min = new Date().getMinutes();
          let s = new Date().getSeconds();
          wx.cloud.callFunction({
            name: 'addsay',
            data: {
              time: { year, mouth, day, houre, min, s },
              say: this.data.value
            }
          }).then(res => {
            console.log(res);
            this.setData({
              value: ''
            })
            wx.navigateBack({
              delta: 1
            });
          })
        } catch(e) {
          console.log(e);
        }
      })
      .catch(() => {
        // on cancel
        Toast.fail({message:'取消发表',forbidClick: true,})
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