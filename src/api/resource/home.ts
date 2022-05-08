import resource from './index'
import { BannerType, PlayListTagType, categories, Tag } from './types';
/**
 * @description: 获取Banner
 * @param {BannerType} data 0:pc 1:android 2:iphone 3:ipad
 * @return {*}
 */
export const getBanner = (type?: 0 | 1 | 2 | 3) => {
    return resource<{ type: 0 | 1 | 2 | 3 }, {banners:BannerType[],code:number}>({
        url: '/banner',
        method: 'GET',
        data: { type: type || 0 },
    })
}
/**
 * @description: 获取所有歌单标签
 * @param {*}
 * @return {*}
 */
export const getPlayListTags = () =>{
    return resource<null, { all: any, sub: PlayListTagType[], categories:categories}>({
        url:'/playlist/catlist',
        method:'GET',
    })
}

/**
 * @description: 精品歌单标签
 * @param {*}
 * @return {*}
 */
export const getHotTags = () => {
    return resource<null, {tags:Tag[],code:string}>({
        url: '/playlist/highquality/tags',
        method: 'GET',
    })
}