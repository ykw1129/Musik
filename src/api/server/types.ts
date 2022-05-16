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
    collections: string[]
    dynamics: string[]
    playlists: string[]
    _id: string
    email: string
    nickName: string
}