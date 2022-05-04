import { AccountRequest,BaseResponse} from './types'
import request from './index'
export const Login = (data: AccountRequest) => {
    return request<AccountRequest, BaseResponse>({
        url: '/user/login',
        method: 'POST',
        data,
    })
}
export const Logout = () => {
    return request<AccountRequest, BaseResponse>({
        url: '/user/logout',
        method: 'POST',
    })
}
export const Register = (data:AccountRequest) => {
    return request<AccountRequest, BaseResponse>({
        url: '/user/add',
        method: 'POST',
        data,
    })
}
/* export const getUserInfo = (data:UserInfo) => {
    return request<AccountRequest, BaseResponse>({
        url: '/user/index',
        method: 'POST',
        data,
    })
}
export const setUserInfo = (data: UpdateUserInfo) => {
    return request<AccountRequest, BaseResponse>({
        url: '/user/update',
        method: 'POST',
        data,
    })
} */