import * as singleSpa from 'single-spa'
import store from './store'
import utils from './utils'

/**
 * @dec 路由解析 {history}
 */
export function pathPrefix(app: any): any {
  return function (location: any) {
    let isShow = false
    if (utils.isArray(app.path)) {
      app.path.forEach((path: any) => {
        if (location.pathname.indexOf(path === 0)) {
          isShow = true
        }
      })
    } else if (location.pathname.indexOf(`${app.path || app.url}`) === 0) {
      isShow = true
    }
    return isShow
  }
}

/**
 * @dec 加载应用js
 */
function appLoader(params: any): any {
  return new Promise((resolve, reject) => {
    try {
      resolve(window.System.import(params.main))
    } catch (error) {
      console.log(`Could not load app ${params.name}`, error)
    }
  })
}

/**
 * [registerApp description]
 * @param  params [description]
 * @return        [description]
 */
export async function registerApp(params: any) {
  for (let i = 0; i < params.js.length; i++) {
    await window.System.import(params.js[i])
  }

  let customProps = {
    store: store
  }
  singleSpa.registerApplication(
    params.name,
    appLoader(params),
    pathPrefix(params),
    customProps
  )
}
