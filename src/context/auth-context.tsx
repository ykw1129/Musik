import React, { Dispatch, ReactNode, useReducer, useState } from 'react';
import { Player, player} from './state';
import { playReducer } from './reducer';
import { Song } from '../api/resource/types';
import { User } from '../api/server/types';
export type ContextType = {
    userInfo: User|undefined
    setUserInfo: Dispatch<User | undefined>
    state: Player
    dispatch: Dispatch<{ type: string, song?: Song }>

} | null
export const Store = React.createContext<ContextType>({ userInfo: undefined, setUserInfo:()=>null,state: player, dispatch: () => null});
export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [userInfo,setUserInfo] = useState<User|undefined>()
    const [state, dispatch] = useReducer(playReducer, player)
    return (
        <Store.Provider value={{ dispatch, state,userInfo,setUserInfo}} children={children} />
    )
}

