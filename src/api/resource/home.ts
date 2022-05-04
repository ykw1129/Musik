import resource from './index'
import { BannerType } from '../../components/types';
/**
 * @description: 0:pc 1:android 2:iphone 3:ipad
 * @param {BannerType} data
 * @return {unknown}
 */
export const getBanner = (type?: 0 | 1 | 2 | 3) => {
    return resource<{ type: 0 | 1 | 2 | 3 }, {banners:BannerType[],code:number}>({
        url: '/banner',
        method: 'GET',
        data: { type: type || 0 },
    })
}