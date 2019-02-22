
const mainControl = require('./app-main-control')

const rander = () => {
    let headView = require('../views/app-header.html')
    let footView = require('../views/app-footer.html')
    $('#head-wrap').html(headView)
    $('#footer-wrap').html(footView)
    mainControl.rander()

}
module.exports = {rander}