import React from 'react'
import { Loader } from './loader';
type LoadingProps = {
    children?: any
}

const Loading = ({ children }: LoadingProps) => {
    return (
        <>
            <div className='flex justify-center items-center w-full h-full backdrop-brightness-75'>
                <div className='p-10 justify-center items-center'>
                    <Loader width={125} height={125} />
                    {children}
                </div>
            </div>
        </>
    )
}
export default Loading