// 参考：
// https://my.oschina.net/zhengjian/blog/170746

// 一共 105 个 QQ 表情

const wxqqemojis = [
  '/::)', '/::~', '/::B', '/::|', '/:8-)',
  '/::<', '/::$', '/::X', '/::Z', '/::\'(',
  '/::-|', '/::@', '/::P', '/::D', '/::O',

  '/::(', '/::+', '/:--b', '/::Q', '/::T',
  '/:,@P', '/:,@-D', '/::d', '/:,@o', '/::g',
  '/:|-)', '/::!', '/::L', '/::>', '/::,@',

  '/:,@f', '/::-S', '/:?', '/:,@x', '/:,@@',
  '/::8', '/:,@!', '/:!!!', '/:xx', '/:bye',
  '/:wipe', '/:dig', '/:handclap', '/:&-(',

  '/:B-)', '/:<@', '/:@>', '/::-O', '/:>-|',
  '/:P-(', '/::\'|', '/:X-)', '/::*', '/:@x',
  '/:8*', '/:pd', '/:<W>', '/:beer', '/:basketb',

  '/:oo', '/:coffee', '/:eat', '/:pig', '/:rose',
  '/:fade', '/:showlove', '/:heart', '/:break', '/:cake',
  '/:li', '/:bome', '/:kn', '/:footb', '/:ladybug',

  '/:shit', '/:moon', '/:sun', '/:gift', '/:hug',
  '/:strong', '/:weak', '/:share', '/:v', '/:@)',
  '/:jj', '/:@@', '/:bad', '/:lvu', '/:no',

  '/:ok', '/:love', '/:<L>', '/:jump', '/:shake',
  '/:<O>', '/:circle', '/:kotow', '/:turn', '/:skip',
  '/:oY', '/:#-0', '/:hiphot', '/:kiss', '/:<&', '/:&>'
]

const emoji_regexp = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g

const split = (s, e)=> {
  var re = []

  s.split(e).forEach((a, idx, arr)=> {
    if (a != '') {
      re.push(a)
    }
    if (idx < arr.length - 1) {
      re.push(e)
    }
  })

  return re
}

export function trans_text (text) {
  var arr = [text]

  wxqqemojis.forEach((e)=> {
    var arr1 = []
    arr.forEach((s)=> {
      arr1 = arr1.concat(split(s, e))
    })
    arr = arr1
  })

  return arr
}

export function trans_output (text) {
  var arr = trans_text(text)

  let re = arr.map((x)=> {
    var idx = wxqqemojis.indexOf(x)

    // 处理 qqemoji
    if (idx > -1) {
      var str = `000${idx}`
      str = str.substr(str.length - 3, 3)
      return { raw: x, qqemoji: str }
    } else {
      return { strs: x }
    }

    // 处理 emoji
    // let s = x
    // let match = s.match(emoji_regexp) || []
    // let sp = s.split(emoji_regexp)
    // let rr = sp[0].split('')

    // match.forEach((x, idx)=> {
    //   rr.push(x)
    //   let ss = sp[idx + 1]
    //   if (ss.length > 0) {
    //     rr = rr.concat(ss.split(''))
    //   }
    // })

    // return { strs: rr }
  })

  // console.debug("emoji_trans: ", re)

  return re
}

// console.log(trans_text("好的/::)不好啊/::@"))
