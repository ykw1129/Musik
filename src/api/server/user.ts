import { AccountRequest, BaseResponse, RegisterRequest } from './types';
import request from './index'
// 登录
export const Login = (data: AccountRequest<string>) => {
    return request<AccountRequest<string>, BaseResponse>({
        url: '/user/login',
        method: 'POST',
        data,
    })
}
// 登出
export const Logout = () => {
    return request<null, BaseResponse>({
        url: '/user/logout',
        method: 'POST',
    })
}
// 注册
export const Register = (data: RegisterRequest<string>) => {
    return request<RegisterRequest<string>, BaseResponse>({
        url: '/user/add',
        method: 'POST',
        data,
    })
}
// 获取用户信息
export const getUserInfo = (data: { id: string }) => {
    return request<{ id: string }, BaseResponse>({
        url: '/user/show',
        method: 'GET',
        data,
    })
}
// 更新用户信息
export const updateUserInfo = (data: { id: string, nickName: string, status: number }) => {
    return request<{ id: string, nickName: string, status: number }, BaseResponse>({
        url: '/user/update',
        method: 'POST',
        data,
    })
}
// 获取所有收藏
export const getAllCollection = (data: { email: string, page?: number, pageSize?: number }) => {
    return request<{ email: string, page?: number, pageSize?: number }, BaseResponse>({
        url: '/collection/index',
        method: 'GET',
        data,
    })
}
// 添加收藏
export const addCollection = (data: { uid: string, mediaId: number }) => {
    return request<{ uid: string, mediaId: number }, BaseResponse>({
        url: '/collection/add',
        method: 'POST',
        data,
    })
}
// 删除收藏
export const removeCollection = (data: { id: string }) => {
    return request<{ id: string }, BaseResponse>({
        url: '/collection/destroy',
        method: 'GET',
        data,
    })
}
// 获取所有歌单
export const getPlaylist = (data: { page?: number, pageSize?: number, playlistTitle?: string }) => {
    return request<{ page?: number, pageSize?: number, playlistTitle?: string }, BaseResponse>({
        url: '/playlist/index',
        method: 'GET',
        data,
    })
}
export const getIsStar = (data: { uId: string, listId: number }) => {
    return request<{ uId: string, listId: number }, BaseResponse>({
        url: '/playlist/isStar',
        method: 'POST',
        data,
    })
}
// 保存自己的歌单
export const saveOwnPlaylist = (data: { uId: string, wid: number, playlistTitle: string, cover: string, introduction: string }) => {
    return request<{ uId: string, wid: number, playlistTitle: string, cover: string, introduction: string }, BaseResponse>({
        url: '/playlist/add',
        method: 'POST',
        data,
    })
}
// 保存网易云歌单
export const saveWyyPlaylist = (data: { uId: string, listId: number }) => {
    return request<{ uId: string, listId: number }, BaseResponse>({
        url: '/playlist/useWyy',
        method: 'POST',
        data,
    })
}
// 往自己歌单添加歌曲
export const addSongToPlaylist = (data: { id: string, wId: string }) => {
    return request<{ id: string, wId: string }, BaseResponse>({
        url: '/playlist/updateMusic',
        method: 'POST',
        data,
    })
}
// 更新歌单封面
export const updatePlaylistCover = (data: { id: string, cover: string }) => {
    return request<{ id: string, cover: string }, BaseResponse>({
        url: '/playlist/updateUrlCover',
        method: 'POST',
        data,
    })
}
// 删除歌单
export const deletePlaylist = (data: { id: string }) => {
    return request<{ id: string }, BaseResponse>({
        url: '/playlist/destroy',
        method: 'GET',
        data,
    })
}
// 获取关注列表
export const getFocus = (data: { page: number, pageSize: number, email: string }) => {
    return request<{ page: number, pageSize: number, email: string }, BaseResponse>({
        url: '/focus/index',
        method: 'GET',
        data,
    })
}
// 关注
export const addFocus = (data: { uid: string, targetFocusId: string }) => {
    return request<{ uid: string, targetFocusId: string }, BaseResponse>({
        url: '/focus/add',
        method: 'POST',
        data,
    })
}
// 取消关注
export const deleteFocus = (data: { id: string }) => {
    return request<{ id: string }, BaseResponse>({
        url: '/focus/destroy',
        method: 'GET',
        data,
    })
}