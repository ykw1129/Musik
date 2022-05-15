import React, {  ReactNode, useReducer } from 'react';
import { User } from '../types';
import { localGet } from '../utils/localStorage';
import { Player, player } from './state';
import { playReducer } from './reducer';
import { Song } from '../api/resource/types';
type ContextType = {
    dispatch:(type:string,song?:Song)=>Player,
    userInfo: User | undefined
    getToken: (key:string)=> boolean|string,
}
const initialState = {
    dispatch: undefined,
    userInfo:undefined,
    getToken:localGet('token')
}
export const Store = React.createContext<ContextType>(initialState);
export const StoreProvider = ({children}:{children: ReactNode}) =>{
     const [state, dispatch] = useReducer(playReducer,player)
    return (
        <Store.Provider value={{ dispatch}} children={children} />
    )
}

