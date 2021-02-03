// miniprogram/pages/addday/addday.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    mouth: 1,
    day: 1
  },

  onClickIcon(){
    Toast.success({
      duration: 1000,
      message: '请输入不多于10个字的节日名',
      forbidClick: true
    })
  },

  change1(e){
    this.setData({
      name: e.detail.value
      });
  },
  change2(e){
    this.setData({
      mouth: e.detail.value
      });
  },
  change3(e){
    this.setData({
      day: e.detail.value
      });
  },
  
  commit(){
    let mouth = Number(this.data.mouth);
    let day = Number(this.data.day);
    let name = this.data.name;
    // console.log(mouth,day);
    if(mouth < 1 || mouth > 12 || day < 1 || day > 32 || !name){
      Toast.fail({ message: '请输入合法的数据', forbidClick: true})
      return;
    }
    Dialog.confirm({
      title: '添加',
      message: '确认添加吗',
    })
      .then(async () => {
        // on confirm
        try {
          db.collection('day').add({
            data: {
              name: name,
              mouth: mouth,
              day: day
            }
          })
          .then(res => { 
            console.log(res); 
            wx.navigateBack({
            delta: 1
            }); 
          })
          .catch(error => { console.log(error); })
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