let gulp = require('gulp');
let htmlclean = require("gulp-htmlclean"); // 压缩html的插件
let imagemin = require("gulp-imagemin"); // 压缩图片
let uglify = require("gulp-uglify"); // 压缩js
let stripdebug = require("gulp-strip-debug"); // 去掉js中的调试语句
let babel = require("gulp-babel"); // babel
let less = require("gulp-less"); //将less转化成css
let cleanCss = require("gulp-clean-css"); // 压缩css文件
// gulp-postcss autoprefixer    给css3的属性加上前缀
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer")
// 开启服务器
let connect = require("gulp-connect");
// 判断当前环境变量是否是开发环境
let dev = process.env.NODE_ENV == "development";
// export NODE_ENV=development 在shell中设置环境变量
let folder = {
    src: "src/",
    dist: "dist/"
}

gulp.task("server", function () {
    connect.server({
        port: "8888",
        livereload: true
    });
})

gulp.task("watch", function () {
    gulp.watch(folder.src + "html/*", gulp.parallel("html"))
    gulp.watch(folder.src + "css/*", gulp.parallel("css"))
    gulp.watch(folder.src + "js/*", gulp.parallel("js"))
})

gulp.task("html", function () {
    let page = gulp.src(folder.src + "html/*")   // 读取html文件
        .pipe(connect.reload()) // 重新刷新
        if (!dev) {
            page.pipe(htmlclean())
        }
        page.pipe(gulp.dest(folder.dist + "html/"))   // gulp.dest 是写入
})

gulp.task("css", function () {
    let page = gulp.src(folder.src + "css/*")   // 读取css文件
        .pipe(connect.reload()) // 重新刷新
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        if (!dev) {
            page.pipe(cleanCss())
        }
        page.pipe(gulp.dest(folder.dist + "css/"))   // gulp.dest 是写入
})

gulp.task("js", function () {
    let page = gulp.src(folder.src + ["!js/*.min.js", "js/*"])   // 读取js文件
        .pipe(connect.reload()) // 重新刷新
        .pipe(babel({
            presets: [ "@babel/env" ]
        }))
        if (!dev) {
            page.pipe(stripdebug())
            page.pipe(uglify())
        }
        page.pipe(gulp.dest(folder.dist + "js/"))   // gulp.dest 是写入
})

gulp.task("image", function () {
    gulp.src(folder.src + "images/*")   // 读取文件
        .pipe(imagemin())
        .pipe(gulp.dest(folder.dist + "images/"))   // gulp.dest 是写入
})

// 默认任务 页面一进来就执行这个任务
gulp.task("default", gulp.parallel("html", "css", "js", "image", "server", "watch"))
