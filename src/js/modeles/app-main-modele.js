
const api = require('../api')
const mainContol = require('../controllers/app-main-control')
// 获取电影


const getFilmsList = (callback) => {
    api.request({
        url: '/ajax/movieOnInfoList?token=',
        success: (data) => {
            callback(data)
        }
    }) 

   
    
}

module.exports = {
    getFilmsList
}