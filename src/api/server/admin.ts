import { AccountRequest, BaseResponse, RegisterRequest } from './types';
import request from './index'
// 管理员登录
export const AdminLogin = (data:{userName:string,passWord:string}) =>{
    return request<{ userName: string, passWord: string }, BaseResponse>({
        url: '/admin/login',
        method: 'POST',
        data,
    })
}
// 管理员登出
export const AdminLogout = () => {
    return request<null, BaseResponse>({
        url: '/admin/logout',
        method: 'POST'
    })
}