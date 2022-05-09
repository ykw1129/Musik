import { useEffect } from "react";
import { defaultLogin } from "../api/resource/auth"
import { localGet, localSet } from '../utils/localStorage';

export const useAuth = (callback:()=>void) => {
    useEffect(() => {
        if (localGet('cookie')) {
            callback()
        } else {
            defaultLogin().then(data => {
                localSet('cookie', encodeURIComponent(data.cookie))
                callback()
            })
        }
    }, [])


}