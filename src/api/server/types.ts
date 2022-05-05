export interface AccountRequest<T> {
    email: T,
    password: T
}
export interface BaseResponse {
    data: {},
    code: number,
    msg: string
}
export interface RegisterRequest<T> extends AccountRequest<T>{
    nickName:T
}