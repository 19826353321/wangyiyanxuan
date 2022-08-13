const router = require('koa-router')();
const {
    fetchGoodsList
} = require('../api')

router.get("/goodsList", async (ctx, next) => {
    // const itemId = encodeURI(ctx.query.itemId);

    try {

        const data1 = await fetchGoodsList(1028003);
        const data2 = await fetchGoodsList(1130056);

        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = data1.data;
        //    resData.data[1] = data2.data;
        // if (data.code == 0) {  //  

        // } else {
        //     // console.log(resData.code);
        //     resData.code = "0";
        //     resData.msg = "fail";
        // }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})
router.get("/goodsList/1130056", async (ctx, next) => {
    try {
        const data = await fetchGoodsList(1130056);
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = data.data;
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})
router.get("/goodsList/3507205", async (ctx, next) => {
    try {
        const data = await fetchGoodsList(3507205);
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = data.data;
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})
router.get("/goodsList/3410005", async (ctx, next) => {
    try {
        const data = await fetchGoodsList(3410005);
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = data.data
        
       
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

module.exports = router.routes();