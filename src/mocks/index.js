function timeDiff(dt = {}) {
  let now = new Date()
  if (dt.year) {
    now.setFullYear(now.getFullYear() + dt.year)
  }
  if (dt.month) {
    now.setMonth(now.getMonth() + dt.month)
  }
  if (dt.day) {
    now.setDate(now.getDate() + dt.day)
  }
  if (dt.hour) {
    now.setHours(now.getHours() + dt.hour)
  }
  return now
}
export const shares = [
  {
    createdAt: timeDiff(),
    message: {
      text: 'console.log 方法用于在 console 窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。它可以接受多个参数，将它们的结果连接起来输出。',
      type: 'text',
      location: '北京'
    }
  },
  {
    createdAt: timeDiff({hour: -1}),
    message: {
      text: '风景真美..../::)/::~/::B/::| /:8-)/::)/::~/::B/::| /:8-)/::)/::~/::B/::| /:8-)/::)/::~/::B/::| /:8-)/::)/::~/::B/::| /:8-)',
      type: 'text'
    }
  },
  {
    createdAt: timeDiff({hour: -2}),
    message: {
      text: '以太坊（Ethereum）并不是一个机构，而是一款能够在区块链上实现智能合约、开源的底层系统，以太坊从诞生到2017年5月，短短3年半时间，全球已有200多个以太坊应用诞生。',
      images: ['/images/1.jpg', '/images/2.jpg'],
      type: 'textImage'
    }
  },
  {
    createdAt: timeDiff({day: -1}),
    message: {
      text: '',
      images: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg'],
      type: 'image',
    }
  },
  {
    createdAt: timeDiff({day: -1, hour: 1}),
    message: {
      text: '',
      images: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'],
      type: 'image',
    }
  },
  {
    createdAt: timeDiff({day: -1, hour: -2}),
    message: {
      text: '',
      images: ['/images/1.jpg'],
      type: 'image',
    }
  },
  {
    createdAt: timeDiff({day: -2}),
    message: {
      text: '尝试用类似编码风格实现一个单页小程序 UI，创建一个工程提交到 gitlab. 具体来说，是实现微信朋友圈中的帖子浏览 UI。示意图如下',
      thumb: '/images/1.jpg',
      type: 'share'
    }
  },
  {
    createdAt: timeDiff({year: -1}),
    message: {
      text: '这是一条文本数据',
      type: 'text'
    }
  }
]
