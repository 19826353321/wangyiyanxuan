const router = require('koa-router')();
const {
    fetchSearchList,
    fetchGoodsDetailList

} = require('../api')
const keywordsList = require("../data/keywords")

const renderGoods = (goodsId) => {
    router.get(`/goodsDetailList/${goodsId}`, async (ctx, next) => {
        try {
            const data = await fetchGoodsDetailList(goodsId)
            let resData = {
                code: "1", // 成功响应 200
                msg: "success" // 成功 | 失败原因
            }
            resData.data = [data.item]
            ctx.body = resData
        } catch (e) {
            next(e)
        }
    })
}
//批量提供商品详情页数据
const renderGoodsList = async () => {
    // const item1 = encodeURI("洗衣机");
    // const item2 = encodeURI("鞋子");
    // const data1 = await fetchSearchList(item1);
    // const data2 = await fetchSearchList(item2);
    // let idArray = [];
    // for (let i = 0, len = data1.data.directlyList.length; i < len; i++) {
    //     idArray.push(data1.data.directlyList[i].id)
    // }
    // for (let i = 0, len = data2.data.directlyList.length; i < len; i++) {
    //     idArray.push(data2.data.directlyList[i].id)
    // }
    // for (let i = 0, len = idArray.length; i < len; i++) {
    //     renderGoods(idArray[i]);
    // }
    let data1 = []
    let idArray = [];
    for (let i = 0; i < keywordsList.length; i++) {
        data1[i] = await fetchSearchList(encodeURI(keywordsList[i]))
        // data1[i] = data1[i].data.directlyList
    }
    for (let j = 0; j < data1.length; j++) {
        for (let i = 0, len = data1[j].data.directlyList.length; i < len; i++) {
            idArray.push(data1[j].data.directlyList[i].id)
        }

    }
    // for (let i = 0, len = data1[0].data.directlyList.length; i < len; i++) {
    //     idArray.push(data1[0].data.directlyList[i].id)
    // }
    // for (let i = 0, len = data1[1].data.directlyList.length; i < len; i++) {
    //     idArray.push(data1[1].data.directlyList[i].id)
    // }
    // for (let i = 0, len = data1[2].data.directlyList.length; i < len; i++) {
    //     idArray.push(data1[2].data.directlyList[i].id)
    // }
    for (let i = 0, len = idArray.length; i < len; i++) {
        renderGoods(idArray[i]);
    }
}
renderGoodsList();

module.exports = router.routes();