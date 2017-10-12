export class Client {
  constructor () {
    this.success_call = function() {}
    this.fail_call = function() {}
    this.complete_call = function() {}
  }

  buildHeaders () {
  }

  success (callback) {
    this.success_call = callback
    return this
  }

  fail (callback) {
    this.fail_call = callback
    return this
  }

  complte (callback) {
    this.complete_call = callback
    return this
  }
  request (method, url, data) {
    wx.request({
      method: method,
      url: url,
      data: data,
      header: this.buildHeaders(),
      success: this.success_call,
      fail: this.fail_call,
      complete: this.complete_call,
    })
  }

  static get (url) {
    return new Client().request('GET', url)
  }
  static post (url, data) {
    return new Client().request('POST', url, data)
  }
}
