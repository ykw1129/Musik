import { localGet } from '../../utils/localStorage';
import resource from './index'
import { BannerType, PlayListTagType, categories, Tag, RecommendType, PlayListType, PlayListResponseType, HighQualityPlayListRequestType, HighQualityPlayListResponseType, Song } from './types';
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
        data:{
            cookie:localGet('cookie')
        }
    })
}
/**
 * @description:  获取标签对应的歌单列表
 * @param {HighQualityPlayListRequestType} param1
 * @return {*}
 */
export const getHighQualityPlayList = ({ cat, before, limit = 20,order='hot' }: HighQualityPlayListRequestType) => {
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
/**
 * @description: 获取歌单详情
 * @param {object} param1
 * @return {*}
 */
export const getPlaylistDetail = ({id }:{id:string}) =>{
    return resource<{ id: string,cookie:any }, PlayListResponseType>({
        url: '/playlist/detail',
        method: 'GET',
        data: {
            id,
            cookie:localGet('cookie')
        }
    })
}
/**
 * @description: 获取歌单所有歌曲
 * @param {object} param1
 * @return {*}
 */
export const getAllSongFormPlayList = ({id,limit=20,offset=0 }:{id:string,limit?:number,offset?:number}) =>{
    return resource<{ id: string, limit?: number, offset?: number }, PlayListResponseType>({
        url: '/playlist/detail',
        method: 'GET',
        data: {
            id,
            limit,
            offset
        }
    })
}
/**
 * @description: 获取歌曲Url
 * @param undefined
 * @return {*}
 */
export const getSongUrl = ({id}:{id:number}) =>{
    return resource<{ id: number}, Song>({
        url: '/song/url',
        method: 'GET',
        data: {
            id,
        }
    })
}

/**
 * @description: 获取歌曲歌词
 * @param undefined
 * @return {*}
 */

export const getSongLyrics = ({id}:{id:number}) =>{
    return resource<{id:number},any>({
        url:'/lyric',
        method:'GET',
        data:{
            id
        }
    })
}