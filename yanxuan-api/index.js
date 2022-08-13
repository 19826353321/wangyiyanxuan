const koa = require("koa");
const app = new koa();
const cors = require("koa-cors")
const router = require('koa-router')();

const cateListRouter=require("./routers/cateList");
const goodsListRouter=require("./routers/goodsList")
const searchListRouter=require("./routers/searchList")
const goodsDetailListRouter=require("./routers/goodsDetailList")
const keywordsRouter=require("./routers/keywords")

app.use(cors())
app.use(cateListRouter)
app.use(goodsListRouter)
app.use(searchListRouter)
app.use(goodsDetailListRouter)
app.use(keywordsRouter)
app.use(router.routes())

app.listen(3001, () => {
    console.log("Your app is running");
})