import React, {  ReactNode } from 'react';
import { User } from '../types';
import { localGet } from '../utils/localStorage';
type ContextType = {
    userInfo: User | undefined
    getToken: (key:string)=> boolean,
}
export const initialState:ContextType = {
    userInfo: undefined,
    getToken:(key:string)=>localGet(key),
}
export const Store = React.createContext<ContextType>(initialState);
export const StoreProvider = ({children}:{children: ReactNode}) =>{
    return (
        <Store.Provider value={initialState} children={children} />
    )
}