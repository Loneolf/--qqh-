const { getFilmsList }= require('../modeles/app-main-modele')

function replaceImgsrc(data){ //替代数据中的img路径，原路径不能正常打开路径图片。
    let newData = data
    let movieList = newData.movieList;
    console.log(movieList)
    for(let i = 0;i<movieList.length;i++){
        let img = movieList[i].img
        movieList[i].img = "https://p1.meituan.net/128.180/movie/"+img.split("/movie/")[1]

    }
    return newData
}

const rander = () =>{
    let movieId = []
    let mainView = require('../views/app-main.html')
    let template = Handlebars.compile(mainView);
    getFilmsList(function(data){
        movieId = data.movieIds
        $('#main-wrap').html(template({film:replaceImgsrc(data).movieList}))

        let Dheight = $('.all-film')[0].offsetHeight
        console.log(Dheight)
    })
    return movieId
}
module.exports = {rander}