import React, { useEffect } from 'react';
export const useMount = (callback: () => void) => {
    return useEffect(() => {
        callback()
    }, [])
}
export const useDebounce = (fn: (timeStamp:number)=>void, delay=1000) => {
    let timer:any|null = null
    return function(e:any) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(e.timeStamp)
        },delay)
    }
}