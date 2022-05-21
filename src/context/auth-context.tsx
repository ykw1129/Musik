import React, { Dispatch, ReactNode, useReducer, useState } from 'react';
import { Player, player } from './state';
import { playReducer } from './reducer';
import { Song } from '../api/resource/types';
import { User } from '../api/server/types';
import { localGet } from '../utils/localStorage';
import { getUserInfo,Logout} from '../api/server/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export type ContextType = {
    isAdmin: boolean
    setIsAdmin: Dispatch<boolean>
    userInfo: User | undefined
    setUserInfo: () => void
    state: Player
    userLogout: () => void
    dispatch: Dispatch<{ type: string, song?: Song }>
} | null
const initial = {
    isAdmin: false,
    userInfo: undefined,
    setIsAdmin: () => null,
    setUserInfo: () => null,
    state: player,
    userLogout: () => null,
    dispatch: () => null,
}
export const Store = React.createContext<ContextType>(initial);
export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const  navigate = useNavigate()
    const [userInfo, setUser] = useState<User | undefined>()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [state, dispatch] = useReducer(playReducer, player)
    const setUserInfo = () => {
        getUserInfo({ id: localGet('user_id') }).then(data => {
            if (data.code === 0) {
                setUser(data?.data[0])
            } else {
                toast.error('获取用户信息失败')
            }

        })
    }
    const userLogout = () => {
        Logout().then(data=>{
            setUser(undefined)
            navigate('/')
            window.localStorage.clear()
        })
    }
    return (
        <Store.Provider value={{ userLogout, dispatch, state, userInfo, setUserInfo, isAdmin, setIsAdmin }} children={children} />
    )
}

