
export interface Req {
    email: string,
    password: string
}
export interface Res {
    data: {},
    code: number,
    msg: string
}
export interface UserInfo{
    nickname:string,
    pageSize:number
}
export interface UpdateUserInfo extends UserInfo{
    id:string
}