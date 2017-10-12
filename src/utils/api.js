import { Client } from './client'
import { env }    from './util'
import { shares } from '../mocks/index'

export const api = {
  shares (callback) {
    if (env.isDev()) {
      setTimeout(()=> callback(shares), 0)
    } else {
      Client.get('shares').success(callback)
    }
  }
}
