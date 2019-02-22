
// 封装api是为了统一处理跨域路径 还有 对请求回来的数据的处理
const api = {

    request({url,data,type,success}){
        $.ajax({
            type:type || "GET",
            data:data || {},
            url:"/test" + url,
            success:(res)=>{
                success(res)
            },
            error:(error) => {
                console.log("请求出错")
            }
        }) 
    }
}
module.exports = api