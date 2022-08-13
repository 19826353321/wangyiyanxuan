// node 版本 es6 晚 
const fetch = require("node-fetch"); // 在后端发送一个请求 rpc 调用 

// 分类数据
const URL_CATE_LIST = "https://m.you.163.com/item/cateList.json";
// 商品数据
const URL_GOODS_LIST = "https://you.163.com/xhr/item/rcmd.json";
// 搜索数据
// const URL_SEARCH_LIST = "https://m.you.163.com/xhr/search/search.json";
//商品详情数据
const URL_GOODS_DETAIL_LIST = "https://m.you.163.com/item/detail.json?__timestamp=1659881337952&id=";



const fetchCateList = () => {
    return fetch(URL_CATE_LIST)
        .then(res => res.json())
        .then(json => json)
}
const fetchGoodsList = (itemId) => {
    const params = [
        `itemId=${itemId}`
    ];
    console.log(URL_GOODS_LIST + "?" + params.join("&"))
    return fetch(URL_GOODS_LIST + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}
//关键字搜索
const fetchSearchList = (w) => {
    return fetch(`https://m.you.163.com/xhr/search/search.json?__timestamp=1659854443260&keyword=${w}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=5&needPopWindow=true&_stat_search=history`)
        .then(res => res.json())
        .then(json => json)
}

const fetchGoodsDetailList = (goodsId) => {
    return  fetch("https://m.you.163.com/item/detail.json?__timestamp=1659881337952&id="+goodsId)
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchCateList,
    fetchGoodsList,
    fetchSearchList,
    fetchGoodsDetailList
}