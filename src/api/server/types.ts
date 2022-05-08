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