import React, {  Dispatch, ReactNode, useReducer } from 'react';
import { Player, player } from './state';
import { playReducer } from './reducer';
import { Song } from '../api/resource/types';
type ContextType = {
    state:Player
    dispatch:Dispatch<{type:string,song?:Song}>
}|null
export const Store = React.createContext<ContextType>({ state: player, dispatch: ()=>null});
export const StoreProvider = ({children}:{children: ReactNode}) =>{
     const [state, dispatch] = useReducer(playReducer,player)
    return (
        <Store.Provider value={{dispatch,state}} children={children} />
    )
}

