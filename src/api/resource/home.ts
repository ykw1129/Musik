import resource from './index'
export const geHome = () => {
    return resource<any, any>({
        url: '/homepage/block/page',
        method: 'GET',
    })
}