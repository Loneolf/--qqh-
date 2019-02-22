const path=require('path')//引入node自带的path模块
const serverConfig = require('./server-config')//引入服务器配置项
const webpackConfig = require('./webpack-config')
const config = {
    path:{ // 路径配置
        src: path.join(__dirname, '../src'),//资源路径
        dest: path.join(__dirname, '../dest'),//开发导出路径
        static: path.join(__dirname, '../src/static'),//静态文件路径
    },
    serverConfig,
    webpackConfig,

}
module.exports = config//导出config