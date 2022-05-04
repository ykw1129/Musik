import React, { useEffect } from 'react';
export const useMount = (callback: () => void) => {
    return useEffect(() => {
        callback()
    }, [callback])

}