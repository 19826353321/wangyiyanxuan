import { axiosInstance } from "./config";
import {
    URL_PARITIONS,
    URL_CATE_LIST,
    URL_GOODS_LIST,
    URL_GOODS_LIST_ITEM,
    URL_SEARCH_LIST,
    URL_GOODS_DETAIL_LIST,
    URL_KEYWORDS,
    URL_SEARCH_DETAIL_ITEM

} from './url';
import {
    CateListType,
    createCateListTypes
} from '@/models';

// 拉取分类页的数据
export const getCateListRequest =
    (): Promise<CateListType[]> => {
        const promise = new Promise<CateListType[]>((resolve, reject) => {
            try {
                axiosInstance.get(URL_CATE_LIST)
                    .then(response => resolve(mapCateListToModel(response)))
            } catch (e) {
                reject(e)
            }
        })
        return promise;
    }
const mapCateListToModel = ({ data }: any): CateListType[] => {
    let oneLevels = createCateListTypes(data);
    return oneLevels;
}
//拉取商品的数据
export const getGoodsListRequest =
    () => axiosInstance.get(URL_GOODS_LIST)
        .then(data => data.data.items)

export const getGoodsListItemRequest =
    (itemId: string) => axiosInstance.get(`${URL_GOODS_LIST}/${itemId}`)
        .then(data => data.data.items)
//拉取搜索列表的数据
export const getSearchListRequest =
    () => axiosInstance.get(URL_SEARCH_LIST)
        .then(data => data.data)
//拉取商品详情页列表列表的数据
export const getGoodsDetailListRequest =
    () => axiosInstance.get(URL_GOODS_DETAIL_LIST)
        .then(data => data.data)

export const getGoodsDetailItemtRequest =
    (goodsId: string) => axiosInstance.get(URL_GOODS_DETAIL_LIST + "/" + goodsId)
        .then(data => data.data)

export const getKeywordsRequest =
    () => axiosInstance.get(URL_KEYWORDS)
        .then(data => data.data)
//拉取后端对应的搜索商品列表数据
export const getSearchDetailItemRequest =
    (index:number) => axiosInstance.get(URL_SEARCH_DETAIL_ITEM+index)
        .then(data => data.data)
