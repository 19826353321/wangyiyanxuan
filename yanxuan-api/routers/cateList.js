const router = require('koa-router')();
// const fetch = require("node-fetch");
const {
    // fetchSuggest,
    // fetchHotword,
    // fetchSearchData,
    fetchCateList
} = require('../api')
// router.get("/cateList", async (ctx) => {
//     ctx.body = {
//         data: cateListData
//     }
// })

router.get("/cateList", async (ctx, next) => {
    try {
        const data = await fetchCateList(); // rpc 调用
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = data.global.cateList;
        // if (data.code == 1) {  // 
        //     ctx.body=data.code 

        // } else {
        //     console.log(resData.code);
        //     // resData.code = "0";
        //     resData.msg = "fail";
        // }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

module.exports = router.routes();