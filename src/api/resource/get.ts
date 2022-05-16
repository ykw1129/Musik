/*
 * @Author: Killian killian@8bsolutions.cn
 * @Date: 2022-05-10 08:28:14
 * @LastEditors: Killian killian@8bsolutions.cn
 * @LastEditTime: 2022-05-16 10:44:05
 * @FilePath: \musik\src\api\resource\get.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

export const getSongUrl = ({id}:{id:number}) =>{
    return resource<{ id: number}, Song>({
        url: '/song/url',
        method: 'GET',
        data: {
            id,
        }
    })
}