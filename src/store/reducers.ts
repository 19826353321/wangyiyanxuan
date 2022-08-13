// reducer +  combineReducers
import { combineReducers, AnyAction } from 'redux';
import * as ActionTypes from './action-types';

const initalState = {
    // 首页
    loading: true,
    home: {
        goodsList: [],
        goodsGroupList: [],
        keywords: [],
        TabsOffsetTop: 0,
    },
    // 分类页 
    partitions: {
        cateList: [],
    },
    //搜索页
    search: {
        searchList: [],
        oldSearchList: ["鞋子"],
        searchDetailItem: []
    },
    // 商品详情页
    goodsDetail: {
        goodsDetailList: [],
        goodsDetailItem: [],
    }
}

const loadingReducer = (state = initalState.loading,
    action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}
const combineHome = (state = initalState.home, action: AnyAction) => {
    switch (action.type) {
        // 初始化商品列表
        case ActionTypes.SET_GOODS_LIST:

            let list = action.data;
            // 将id初始化成string类型
            list.map((item: any) => item.id = "" + item.id);
            // 给商品信息添加一个是否在购物车的boolean值为false
            list.map((item: any) => item.enterCart = false);
            list.filter((item: any, index: any) => index <= 2).map((item: any) => item.enterCart = true);
            // 将购物车列表的选中按钮的初始值设置成“未选择状态”
            list.map((item: any) => item.check = true);
            // 将购物车列表的商品购买数量的初始值设置成1件
            list.map((item: any) => item.goodsNum = 1);
            // list=[...list.filter()]
            // list[0].check = true;
            return Object.assign({}, state, {
                goodsList: list
            })
            break;
        // 初始化商品列表数组
        case ActionTypes.SET_GOODS_GROUP_LIST:
            // console.log(333);

            return {
                ...state,
                goodsGroupList: action.data
            }
            break;
        // 修改购物车对应商品的选中按钮的boolean值
        case ActionTypes.CHECK_GOODS:
            let checkList = state.goodsList;
            checkList.map((item: any) => {
                if (item.id == action.data) {
                    item.check = !item.check
                    item.goodsNum == '0' ? item.goodsNum = '1' : ''
                }
            })
            return Object.assign({}, state, {
                goodsList: [...checkList]
            })
            break;
        // 修改购物车全选按钮的boolean值
        case ActionTypes.CHECK_ALL_GOODS:
            let checkAllList = state.goodsList
            checkAllList.map((item: any) => {
                item.check = !action.data
            })
            return Object.assign({}, state, { list: [...checkAllList] })
            break;
        // 修改购物车中对应商品的购买数量
        case ActionTypes.CHNAGE_GOODS_NUM:
            let changeList = state.goodsList;
            //  + -  指定商品  action type CHNAGE_GOODS_NUM 
            //  data: {id:id, status:'add|minus' }
            changeList.map((item: any) => {
                if (item.id == action.data.goodsId) {
                    action.data.status == 'add' ? item.goodsNum++ : item.goodsNum--;
                    item.goodsNum == '0' ? item.check = false : ''
                    // -1 UI 去做 item.goodsNum> 0 && <button>-</button>
                }
            })
            return Object.assign({}, state, { goodsList: [...changeList] })
            break;
        //
        case ActionTypes.ADD_CART:
            let cartList = state.goodsList;
            cartList.map((item: any) => {


                if (item.id == action.data) {
                    item.enterCart = true
                }

            })
            return Object.assign({}, state, {
                goodsList: [...cartList]
            })
            break;
        case ActionTypes.SET_KEYWORDS:
            let keywordsList = action.data;
            // keywordsList.map((item: any,index:any) => (item.key = index));
            return {
                ...state,
                keywords: keywordsList
            }
        case ActionTypes.SET_TABS_OFFSET_TOP:
            return {
                ...state,
                TabsOffsetTop: action.data
            }
        // 默认状态
        default:
            return state
    }
}
const combinePartitions = (state = initalState.partitions, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_CATE_LIST:
            return {
                ...state,
                cateList: action.data
            }
            break;
        default:
            return state
    }
}
const combineSearch = (state = initalState.search, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_SEARCH_LIST:

            return {
                ...state,
                searchList: action.data
            }
            break;
        case ActionTypes.SET_OLD_SEARCH_LIST:
            return {
                ...state,
                oldSearchList: [action.data, ...state.oldSearchList]
            }
            break;
        case ActionTypes.SET_SEARCH_DETAIL_ITEM:
            return {
                ...state,
                searchDetailItem: action.data
            }
            break;
        default:
            return state
    }
}
const combinegoodsDetail = (state = initalState.goodsDetail, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_GOODS_DETAIL_LIST:

            return {
                ...state,
                goodsDetailList: action.data

            }
            break;
        case ActionTypes.SET_GOODS_DETAIL_ITEM:

            return {
                ...state,
                goodsDetailItem: action.data

            }
            break;
        default:
            return state
    }
}

export default combineReducers({
    loading: loadingReducer,
    home: combineHome,
    partitions: combinePartitions,
    search: combineSearch,
    goodsDetail: combinegoodsDetail

})