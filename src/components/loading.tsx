import React from 'react'
import { Loader } from './loader';
type LoadingProps = {
    children?: any
}

const Loading = ({ children }: LoadingProps) => {
    return (
        <>
            <div className='justify-center items-center w-full h-full backdrop-brightness-75'>
                <div className='p-10'>
                    <Loader width={125} height={125} />
                </div>
                {children}
            </div>
        </>
    )
}
export default Loading