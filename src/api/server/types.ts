export interface AccountRequest<T> {
    email: T,
    password: T
}
export interface BaseResponse {
    [property: string]: any;
    data: {
        [property: string]: any;
    },
    code: number,
    msg: string
}
export interface RegisterRequest<T> extends AccountRequest<T>{
    nickName:T
}
export type User = {
    status: number
    fileIds: string[]
    friendsIds: string[]
    collections: number[]
    dynamics: string[]
    playlists: string[]
    _id: string
    email: string
    nickName: string
    registerTime: string
    updateTime: string
}
export type Collection = {
    createTime: number
    email: string
    mediaId: string
    uid: string
    updateTime: number
    _id: string
}
export type PlaylistCollection = {
    collect: number
    comment: number
    cover: string
    createTime: number
    introduction: string
    like: number
    playlistTitle:string
    updateTime: number
    views: number
    wId: number[]
    _id: string
}