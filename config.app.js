
// import * as fs from 'fs';
// import * as Path from 'path';

const fs = require('fs')
const Path = require('path')

const appConfig = []

const appList = fs.readdirSync(__dirname + '/public/app')

appList.map((app) => {
  const scriptList = fs.readdirSync(__dirname + `/public/app/${app}/js`)
  const [mainScript, ...chunkScript] = scriptList
  appConfig.push({
    name: app,
    id: app,
    path: `/portal/${app}`,
    appRouter: `/portal/${app}`,
    prefix: `/portal/${app}`,
    main: `/app/${app}/js/${mainScript}`,
    js: chunkScript.map((val) => `/app/${app}/js/${val}`),
    base: true
  })
})

const appConfigString = JSON.stringify(appConfig)

fs.writeFileSync(`${__dirname}/public/app.config.json`, appConfigString)

console.log('配置文件生成成功！🚀----')
