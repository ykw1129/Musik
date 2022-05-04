import React, {  ReactNode } from 'react';
import { User } from '../types';
import { Login, Register } from '../api/server/user';
import { YWZResponse } from '../api/server';
import { AccountRequest, BaseResponse } from '../api/server/types';
import { localGet } from '../utils/localStorage';
type ContextType = {
    userInfo: User | undefined
    getToken: (key:string)=> boolean,
    Login: (data: AccountRequest) => Promise<YWZResponse<BaseResponse>>,
    Register: (data: AccountRequest) => Promise<YWZResponse<BaseResponse>>,
}
export const initialState:ContextType = {
    userInfo: undefined,
    getToken:(key:string)=>localGet(key),
    Login,
    Register,
}
export const Store = React.createContext<ContextType>(initialState);
export const StoreProvider = ({children}:{children: ReactNode}) =>{
    return (
        <Store.Provider value={initialState} children={children} />
    )
}