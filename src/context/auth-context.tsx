import React, { Dispatch, ReactNode, useReducer, useState } from 'react';
import { Player, player } from './state';
import { playReducer } from './reducer';
import { Song } from '../api/resource/types';
import { User } from '../api/server/types';
export type ContextType = {
    isAdmin: boolean
    setIsAdmin: Dispatch<boolean>
    userInfo: User | undefined
    setUserInfo: Dispatch<User | undefined>
    state: Player
    dispatch: Dispatch<{ type: string, song?: Song }>

} | null
const initial = {
    isAdmin: false,
    userInfo: undefined,
    setIsAdmin: () => null,
    setUserInfo: () => null,
    state: player, dispatch: () => null,
}
export const Store = React.createContext<ContextType>(initial);
export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [userInfo, setUserInfo] = useState<User | undefined>()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [state, dispatch] = useReducer(playReducer, player)
    return (
        <Store.Provider value={{ dispatch, state, userInfo, setUserInfo, isAdmin, setIsAdmin }} children={children} />
    )
}

