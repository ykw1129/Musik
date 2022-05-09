import React, { ReactNode } from 'react'
function Mask({ children }: { children?: ReactNode }) {
    return (
        <div className='group-hover:bg-[rgb(0,0,0,0.5)] transition-colors absolute w-full h-full'>
            {children}
        </div>
    )
}

export default Mask