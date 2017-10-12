//app.js
import { logger, api } from './utils/index'
const methods = {
  api: api,
  log: logger('info'),
  warn: logger('warn')
}
App({
  ...methods,
  onLaunch: function () {
  },
  globalData: {
    userInfo: null
  }
})
