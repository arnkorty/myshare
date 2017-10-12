import { trans_output } from './trans_text'
export function recombinShares (shares) {
  shares = shares.sort(function(a, b) {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt)
  })
  let result = []
  let j = 0
  for(let i = 0, len = shares.length; i < len ; i ++) {
    if (shares[i].message.text) {
      shares[i].message.emoji_messages = trans_output(shares[i].message.text)
    }
    if (result[j] && result[j].date === getDateString(shares[i].createdAt)) {
      result[j].messages.push(shares[i].message)
    } else {
      if (result[j]){
        if (new Date(shares[i].createdAt).getFullYear() !== (new Date(shares[i - 1].createdAt)).getFullYear()){
          j += 1
          result[j] = {year: new Date(shares[i].createdAt).getFullYear() + '年'}
        }
        j += 1
      }
      result[j] = {
        date: getDateString(shares[i].createdAt),
        messages: [shares[i].message]
      }
    }
  }
  return result
}
function getDateString (date) {
  date = new Date(date)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
