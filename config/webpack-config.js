const path = require('path')
const webpackConfig = {
    mode:'development',
    entry:{
        index:path.join(__dirname,'../src/js/index.js')
    },
    output: { // 出口
        filename: '[name].js' // 如果配置的什么名字，就输出什么名字
    },
    module: { // 配置各个loader
        rules: [ // 放入一个一个的规则
            {
                test: /\.html$/, // 寻找引入进行来的后缀名伪html的模块,在此处使用的是‘string-loader’插件
                use: 'string-loader'// 对这些模块使用什么loader
            }
        ] 
    }
}
module.exports = webpackConfig