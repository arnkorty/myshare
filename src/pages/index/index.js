import { iPage } from '../../utils/iPage'
import Component from '../../components/index'
import { recombinShares } from '../../utils/index'

iPage(Page)({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    Component.init(this, 'demo', {name: 'Demo'})
    this.app.api.shares((shares) => {
      shares = recombinShares(shares)
      this.app.log(shares)
      this.setData({shares: shares})
    })
    wx.getUserInfo({
      success: res => {
        this.app.globalData.res = res
        this.app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: {...res.userInfo, signRemark: '大早被闹钟吵醒 ,说明还活着'},
          hasUserInfo: true
        })
      }
    })
  }
})
