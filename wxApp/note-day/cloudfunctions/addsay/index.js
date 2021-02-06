// 云函数入口文件
const cloud = require('wx-server-sdk')

const env = 'dddd-8gf6tlhw1bb9e8cc'
cloud.init()
const db = cloud.database({ env }) //指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  let { say, time, userInfo } = event;
  let { year, mouth, day, houre, min, s } = time;
  let message = await db.collection('say').add({
    data: {
      _openid: userInfo.openId,
      say: say,
      year: year,
      mouth: mouth,
      day: day,
      houre: houre,
      min: min,
      s: s
    }
  })
  .then(res => {
  })
  return {
    message: 'yes'
  }
}