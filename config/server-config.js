const serverConfig = {
    livereload: {  //使用“端口”属性来设置自定义实时重新加载端口，以及过滤器函数来过滤要监视的文件。实时加载浏览器页面
        enable:true,
    },
    directoryListing: false ,
    open: false, //是否自动在浏览器打开页面,一般是手动打开页面，如果为true，开启服务器就会自动在浏览器打开端口页面
    port: 5000 ,//设置服务器端口号为5000

    proxies:[
        { //代理对象的列表。可以指定每个代理对象
            source: '/test',  //暗号 
            target: 'http://m.maoyan.com/', // 真正的目标
        }
    ],  
}

module.exports = serverConfig