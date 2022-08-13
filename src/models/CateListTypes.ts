/**
 * 分类
 */
class CateListType {
    constructor(
        public id: number,
        public superCategoryId: number,
        public showIndex: number,
        public name: string,
        public frontName: string,
        public frontNameIcon: any,
        public frontDesc: any,
        public bannerUrl: string,
        public bannerList: any,
        public iconUrl: string,
        public imgUrl: string,
        public level: any,
        public subCateList: any[],
        public wapBannerUrl: string,
        public type: number,
        public wapExpandPicTargetUrl: any,
        public categoryType: number,
        public extra: any

    ) { }
}

function createCateListTypes(data: any[]): CateListType[] {
    return data.map((item) => new CateListType(
        item.id,
        item.superCategoryId,
        item.showIndex,
        item.name,
        item.frontName,
        item.frontNameIcon,
        item.frontDesc,
        item.bannerUrl,
        item.bannerList,
        item.iconUrl,
        item.imgUrl,
        item.level,
        item.subCateList,
        item.wapBannerUrl,
        item.type,
        item.wapExpandPicTargetUrl,
        item.categoryType,
        item.extra
    ));
}
// interface TabItem {
//     id: number;
//     name: string;
// }
export {
    CateListType,
    createCateListTypes
};
// export type { TabItem };
