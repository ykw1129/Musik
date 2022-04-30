import { Req, Res, UserInfo, UpdateUserInfo } from './types'
import request from './index'
export const Login = (data: Req) => {
    return request<Req, Res>({
        url: '/user/login',
        method: 'POST',
        data,
    })
}
export const Logout = () => {
    return request<Req, Res>({
        url: '/user/logout',
        method: 'POST',
    })
}
export const Register = (data:Req) => {
    return request<Req, Res>({
        url: '/user/add',
        method: 'POST',
        data,
    })
}
export const getUserInfo = (data:UserInfo) => {
    return request<UserInfo, Res>({
        url: '/user/index',
        method: 'POST',
        data,
    })
}
export const setUserInfo = (data: UpdateUserInfo) => {
    return request<UpdateUserInfo, Res>({
        url: '/user/update',
        method: 'POST',
        data,
    })
}