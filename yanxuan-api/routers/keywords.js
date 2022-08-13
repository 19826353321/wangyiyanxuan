const router = require('koa-router')();
const keywordsList = require("../data/keywords")

router.get("/keywords", async (ctx, next) => {
    try {
        
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = keywordsList;
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

module.exports = router.routes();