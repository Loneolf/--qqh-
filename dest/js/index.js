/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/api/index.js":
/*!*****************************!*\
  !*** ./src/js/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// 封装api是为了统一处理跨域路径 还有 对请求回来的数据的处理\r\nconst api = {\r\n\r\n    request({url,data,type,success}){\r\n        $.ajax({\r\n            type:type || \"GET\",\r\n            data:data || {},\r\n            url:\"/test\" + url,\r\n            success:(res)=>{\r\n                success(res)\r\n            },\r\n            error:(error) => {\r\n                console.log(\"请求出错\")\r\n            }\r\n        }) \r\n    }\r\n}\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/js/api/index.js?");

/***/ }),

/***/ "./src/js/controllers/app-control.js":
/*!*******************************************!*\
  !*** ./src/js/controllers/app-control.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst mainControl = __webpack_require__(/*! ./app-main-control */ \"./src/js/controllers/app-main-control.js\")\r\n\r\nconst rander = () => {\r\n    let headView = __webpack_require__(/*! ../views/app-header.html */ \"./src/js/views/app-header.html\")\r\n    let footView = __webpack_require__(/*! ../views/app-footer.html */ \"./src/js/views/app-footer.html\")\r\n    $('#head-wrap').html(headView)\r\n    $('#footer-wrap').html(footView)\r\n    mainControl.rander()\r\n\r\n}\r\nmodule.exports = {rander}\n\n//# sourceURL=webpack:///./src/js/controllers/app-control.js?");

/***/ }),

/***/ "./src/js/controllers/app-main-control.js":
/*!************************************************!*\
  !*** ./src/js/controllers/app-main-control.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { getFilmsList }= __webpack_require__(/*! ../modeles/app-main-modele */ \"./src/js/modeles/app-main-modele.js\")\r\n\r\nfunction replaceImgsrc(data){ //替代数据中的img路径，原路径不能正常打开路径图片。\r\n    let newData = data\r\n    let movieList = newData.movieList;\r\n    console.log(movieList)\r\n    for(let i = 0;i<movieList.length;i++){\r\n        let img = movieList[i].img\r\n        movieList[i].img = \"https://p1.meituan.net/128.180/movie/\"+img.split(\"/movie/\")[1]\r\n\r\n    }\r\n    return newData\r\n}\r\n\r\nconst rander = () =>{\r\n    let movieId = []\r\n    let mainView = __webpack_require__(/*! ../views/app-main.html */ \"./src/js/views/app-main.html\")\r\n    let template = Handlebars.compile(mainView);\r\n    getFilmsList(function(data){\r\n        movieId = data.movieIds\r\n        $('#main-wrap').html(template({film:replaceImgsrc(data).movieList}))\r\n\r\n        let Dheight = $('.all-film')[0].offsetHeight\r\n        console.log(Dheight)\r\n    })\r\n    return movieId\r\n}\r\nmodule.exports = {rander}\n\n//# sourceURL=webpack:///./src/js/controllers/app-main-control.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst appControl = __webpack_require__(/*! ./controllers/app-control */ \"./src/js/controllers/app-control.js\")\r\n\r\nappControl.rander()\r\n$('body').on('scroll',function () {\r\n    // let scrollTop = $('.all-film').scrollTop\r\n    // console.log('滚动条位置：' + scrollTop);\r\n    console.log(\"aaa\")\r\n})\r\n// window.onscroll = function () {\r\n//     let scrollTop = $('.all-film').scrollTop\r\n//     console.log('滚动条位置：' + scrollTop);\r\n// }\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modeles/app-main-modele.js":
/*!*******************************************!*\
  !*** ./src/js/modeles/app-main-modele.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst api = __webpack_require__(/*! ../api */ \"./src/js/api/index.js\")\r\nconst mainContol = __webpack_require__(/*! ../controllers/app-main-control */ \"./src/js/controllers/app-main-control.js\")\r\n// 获取电影\r\n\r\n\r\nconst getFilmsList = (callback) => {\r\n    api.request({\r\n        url: '/ajax/movieOnInfoList?token=',\r\n        success: (data) => {\r\n            callback(data)\r\n        }\r\n    }) \r\n\r\n   \r\n    \r\n}\r\n\r\nmodule.exports = {\r\n    getFilmsList\r\n}\n\n//# sourceURL=webpack:///./src/js/modeles/app-main-modele.js?");

/***/ }),

/***/ "./src/js/views/app-footer.html":
/*!**************************************!*\
  !*** ./src/js/views/app-footer.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer class=\\\"footer\\\">    <a class=\\\"footer-movie footerBox active\\\">        <i class = \\\"iconfont icon-dianying\\\"></i>        <span>电影</span>    </a>    <a class=\\\"footer-cinema footerBox\\\">        <i class=\\\"iconfont icon-huabankaobei\\\"></i>        <span>影院</span>    </a>    <a class=\\\"footer-my footerBox\\\">        <i class=\\\"iconfont icon-wode\\\"></i>        <span>我的</span>    </a></footer>\"\n\n//# sourceURL=webpack:///./src/js/views/app-footer.html?");

/***/ }),

/***/ "./src/js/views/app-header.html":
/*!**************************************!*\
  !*** ./src/js/views/app-header.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header class=\\\"header\\\">    <h1>猫眼电影</h1></header>\"\n\n//# sourceURL=webpack:///./src/js/views/app-header.html?");

/***/ }),

/***/ "./src/js/views/app-main.html":
/*!************************************!*\
  !*** ./src/js/views/app-main.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main class=\\\"main\\\">    <div class=\\\"topbar\\\">        <div class=\\\"topbar-position\\\">北京</div>        <div class=\\\"topbar-content\\\">            <div class=\\\"topbar-content-hot active\\\">正在热映</div>            <div class=\\\"topbar-content-prev\\\">即将上映</div>        </div>        <div class=\\\"topbar-search iconfont icon-search\\\"></div>    </div>    <div class=\\\"all-film\\\">    {{#each film}}        <div class=\\\"main-movie-box\\\">            <div class=\\\"movie-item\\\">                <div class=\\\"movie-img\\\">                    <img src=\\'{{img}}\\' alt=\\\"\\\">                </div>                <div class=\\\"movie-infor\\\">                    <div class=\\\"movie-infor-title\\\">                        <h2 class=\\\"movie-name\\\">{{nm}}</h2>                        <span class=movie-type></span>                    </div>                    <div class=\\\"movie-infor-content\\\">                        <div class=\\\"movie-score\\\">                            <span class=\\\"score-audience\\\">观众评</span>                            <span class=\\\"grade\\\">{{sc}}</span>                        </div>                        <div class=\\\"movie-actor\\\">主演：{{star}}</div>                        <div class=\\\"movie-show-info\\\">{{showInfo}}</div>                    </div>                </div>                <div class=\\\"movie-btn\\\">                    <span class=\\\"movie-buy\\\">购票</span>                </div>            </div>        </div>        {{/each}}    </div></main>\"\n\n//# sourceURL=webpack:///./src/js/views/app-main.html?");

/***/ })

/******/ });