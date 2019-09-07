import appList from './app.config'
import * as singleSpa from 'single-spa'

import {
  registerApp
} from './register'

/**
 * [注册应用]
 * @return [true or false]
 */
function bootstrap() {
  return new Promise((resolve) => {
    const bootstrapApp = appList.map((app) => registerApp(app))
    Promise
      .all(bootstrapApp)
      .then(() => {
        singleSpa.start()
        resolve(true)
      })
  })
}

export async function init() {
  const result = await bootstrap()
  if (result) singleSpa.start()
}
