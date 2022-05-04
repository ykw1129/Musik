import Request from '../../utils/request'
import { AxiosResponse } from 'axios'
import type { RequestConfig } from '../../utils/request/types'
import { toast } from 'react-toastify';
const prefix = '/api/v1'
export const API_URL = process.env.REACT_APP_API_URL + prefix
export const APP_RESOURCE_URL = process.env.REACT_APP_RESOURCE_URL
export interface YWZResponse<T> {
    data: T
    code: number
    msg: string
}

// 重写返回类型
interface YWZRequestConfig<T, R> extends RequestConfig<YWZResponse<R>> {
    data?: T
}

const request = new Request({
    baseURL: API_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => config,
        // 响应拦截器
        responseInterceptors: (result: AxiosResponse) => {
            if (result.data.code===200){
                toast.success(result.data.msg)
            }
            return result
        },
    },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const ywzRequest = <D = any, T = any>(config: YWZRequestConfig<D, T>) => {
    const { method = 'GET' } = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data
    }
    return request.request<YWZResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
    return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
    return request.cancelAllRequest()
}

export default ywzRequest