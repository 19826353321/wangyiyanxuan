const router = require('koa-router')();
const {
    fetchSearchList
} = require('../api')
const keywordsList = require("../data/keywords")


router.get("/searchList", async (ctx, next) => {
    try {
        let data1 = []
        for (let i = 0; i < keywordsList.length; i++) {
            data1[i] = await fetchSearchList(encodeURI(keywordsList[i]))
            data1[i] = data1[i].data
        }
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        resData.data = data1
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

// router.get("/searchDetail/0", async (ctx, next) => {
//     try {
//         const data = await fetchSearchList(encodeURI(keywordsList[0]))
//         let resData = {
//             code: "1", // 成功响应 200
//             msg: "success" // 成功 | 失败原因
//         }
//         resData.data =data.data.directlyList;
//         ctx.body = resData
//     } catch (e) {
//         next(e)
//     }
// })
const provideSearchDetail = (index) => {
    router.get(`/searchDetail/${index}`, async (ctx, next) => {
        try {
            const data = await fetchSearchList(encodeURI(keywordsList[index]))
            let resData = {
                code: "1", // 成功响应 200
                msg: "success" // 成功 | 失败原因
            }
            resData.data = data.data.directlyList;
            ctx.body = resData
        } catch (e) {
            next(e)
        }
    })
}
const provideSearchDetailAll = () => {
    for (let i = 0, len = keywordsList.length; i < len; i++) {
        provideSearchDetail(i);
    }
}
// provideSearchDetail(1);
provideSearchDetailAll()

module.exports = router.routes();