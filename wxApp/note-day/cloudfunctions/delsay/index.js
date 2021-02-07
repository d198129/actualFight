// 云函数入口文件
const cloud = require('wx-server-sdk')

const env = 'dddd-8gf6tlhw1bb9e8cc'
cloud.init()
const db = cloud.database({ env }) //指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  let { name } = event;
  await db.collection('say').doc(name).remove({
    success: function(res) {
      console.log(res.data)
    }
  })

  return {
    message: 'ok'
  }
}