
import { env } from './util'
export function logger (level = 'info') {
  // 检查运行环境
  if (env.isDev()) {
    return function () {
      /* eslint-disable no-console */
      console[level].apply(null, arguments)
    }
  } else {
    return () => {}
  }
}
