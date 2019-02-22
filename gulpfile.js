const gulp=require("gulp")
const {path,serverConfig,webpackConfig} = require('./config')
const server = require('gulp-webserver')
const Path = require('path')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const del = require('del')
const webpack = require('webpack-stream')
// 迁移html文件
gulp.task('copy-html',()=>{
    let {src,dest}  = path
    gulp.src(src+"/*.html")
        .pipe(gulp.dest(dest))
})

// 迁移static文件
gulp.task('copy-static',()=>{
    let {dest,static}  = path
    gulp.src(static+"/**/*")
        .pipe(gulp.dest(dest+"/static"))
})

// 当文件发生改变时，同步修改
gulp.task("watch",()=> {
    let {src,dest}=path
    gulp.watch(src+"/*.html",['copy-html']);//监视html文件是否发生变化
    gulp.watch(src+"/static/**/*",["copy-static"]);//监听static中的文件
    gulp.watch(src+'/css/**/*',['sass']);//监听css中scss文件
    gulp.watch(src+'/js/**/*',['pack-js']);//监听js中的js文件
    watch(src+'/static/**/*',(vinyl) =>{//watch插件监听src+'/static/**/*'下的文件，当发生文件变化时，执行函数内的内容，
        if(vinyl.event === 'unlink' ){//当发生删除文件事件时，
            let _path = Path.resolve(dest+'/static',vinyl.path.split('\\static\\')[1])//要删除文件的绝对路径
            del(_path)//用del插件删除文件
        }else{
            gulp.start(['copy-static'])//如果不是删除文件行文，则执行'copy-static'任务
        }
    })

})
// 开启服务
gulp.task("server",() => {
    let {dest} = path
    gulp.src(dest)
        .pipe(server(serverConfig))
})

// 处理sass文件
gulp.task('sass',() =>{
    let {src,dest} = path
    gulp.src(src+"/css/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(dest+'/css'))
})
// 处理JS文件
gulp.task('pack-js', () => {
    let { src, dest } = path
    return gulp.src(src + '/js/**/*.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(dest + '/js'))
})
// 默认启动项，将所有都运行。
gulp.task('default',[
    'copy-html',
    'copy-static',
    'watch',
    'server',
    'sass',
    'pack-js'
],()=>{
    console.log("配置成功了")
})


