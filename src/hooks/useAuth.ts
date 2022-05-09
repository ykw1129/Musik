import { useEffect } from "react";
import { defaultLogin } from "../api/resource/auth"
import { localGet, localSet } from '../utils/localStorage';

export const useAuth = (callback:()=>void) => {
    useEffect(() => {
        if (localGet('cookie') && localGet('cookie')!=='undefined') {
            callback()
        } else {
            defaultLogin().then(data => {
                if(data.code===200){
                    localSet('cookie', encodeURIComponent(data.cookie))
                    callback()
                }

            })
        }
    }, [])


}