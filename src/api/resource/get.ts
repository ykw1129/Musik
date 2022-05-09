import { localGet } from '../../utils/localStorage';
import resource from './index'
import { BannerType, PlayListTagType, categories, Tag, RecommendType, PlayListType } from './types';
/**
 * @description: 获取Banner
 * @param {BannerType} data 0:pc 1:android 2:iphone 3:ipad
 * @return {*}
 */
export const getBanner = (type?: 0 | 1 | 2 | 3) => {
    return resource<{ type: 0 | 1 | 2 | 3 }, { banners: BannerType[], code: number }>({
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
export const getPlayListTags = () => {
    return resource<null, { all: any, sub: PlayListTagType[], categories: categories }>({
        url: '/playlist/catlist',
        method: 'GET',
    })
}

/**
 * @description: 精品歌单标签
 * @param {*}
 * @return {*}
 */
export const getHotTags = () => {
    return resource<null, { tags: Tag[], code: string }>({
        url: '/playlist/highquality/tags',
        method: 'GET',
    })
}

/**
 * @description: 获取推荐歌单
 * @param {*}
 * @return {*}
 */

export const getRecommend = () => {
    return resource<{ cookie: any }, { code: string, recommend: RecommendType }>({
        url: '/recommend/resource',
        method: 'GET',
        data: {
            cookie: localGet('cookie')
        }
    })
}
type HighQualityPlayListRequestType = {
    cat?: string
    limit?: number
    before?: number
}
type HighQualityPlayListResponseType = {
    playlists:PlayListType[]
    code:number
    more:boolean
    lasttime:number
    total:number
}
/**
 * @description:  获取标签对应的歌单列表
 * @param {HighQualityPlayListRequestType} param1
 * @return {*}
 */
export const getHighQualityPlayList = ({ cat, limit=20, before }: HighQualityPlayListRequestType) => {
    return resource<HighQualityPlayListRequestType, HighQualityPlayListResponseType>({
        url:'/top/playlist/highquality',
        method:'GET',
        data:{
            cat,
            limit,
            before
        }
    })
}