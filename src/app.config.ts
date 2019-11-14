/**
 * app config
 * 子应用配置
 */
// let config = [{
//   name: 'app1',
//   id: 'app1',
//   // 模块名称
//   path: '/portal/app1',
//   // 跳转地址
//   appRouter: '/portal/app1',
//   // 模块url前缀
//   prefix: '/portal/app1',
//   // 模块文件路径前缀
//   main: 'http://172.28.74.247:8821/app/app1/js/app.js',
//   // js
//   js: ['http://172.28.74.247:8821/app/app1/js/chunk-vendors.js'],
//   // 模块对外接口
//   base: true
// }, {
//   name: 'app2',
//   id: 'app2',
//   // 模块名称
//   path: '/portal/app2',
//   // 跳转地址
//   appRouter: '/portal/app2',
//   // 模块url前缀
//   prefix: '/portal/app2',
//   // 模块文件路径前缀
//   main: 'http://172.28.74.247:8822/app/app2/js/app.js',
//   // js
//   js: ['http://172.28.74.247:8822/app/app2/js/chunk-vendors.js'],
//   // 模块对外接口
//   base: true
// }]

// let config = [{
//   name: 'app1',
//   id: 'app1',
//   // 模块名称
//   path: '/portal/app1',
//   // 跳转地址
//   appRouter: '/portal/app1',
//   // 模块url前缀
//   prefix: '/portal/app1',
//   // 模块文件路径前缀
//   main: '/app/app1/js/app.1ba2c761.js',
//   // js
//   js: ['/app/app1/js/chunk-vendors.12fcbbbd.js'],
//   // 模块对外接口
//   base: true
// }, {
//   name: 'app2',
//   id: 'app2',
//   // 模块名称
//   path: '/portal/app2',
//   // 跳转地址
//   appRouter: '/portal/app2',
//   // 模块url前缀
//   prefix: '/portal/app2',
//   // 模块文件路径前缀
//   main: '/app/app2/js/app.f1c0b0d8.js',
//   // js
//   js: ['/app/app2/js/chunk-vendors.390f782f.js'],
//   // 模块对外接口
//   base: true
// }]
const appConfig = require('../public/app.config.json')

const config = appConfig

export default config
