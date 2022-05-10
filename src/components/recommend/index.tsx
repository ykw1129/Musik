import React, { useState } from 'react'
import { useMount } from '../../hooks/index';
import { RecommendType } from '../../api/resource/types';
import { getRecommend } from '../../api/resource/get';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Mask from './mask';
function Index() {
    const [recommends, setRecommends] = useState<RecommendType[] | undefined>()
    const fetch = () =>{
            getRecommend().then(data => {
                if (data.code === 200) {
                    setRecommends(data.recommend)
                } else {
                    toast.error(data.message)
                }
            })
    }
    useAuth(fetch)
    return (
        <section>
            <ul>
                {
                    recommends?.map((recommend:RecommendType)=>
                        <li key={recommend.id} className="w-1/4 pr-4 pb-3 inline-block">
                            <Link to={`/category/songlist/${recommend.id}`} className="group">
                                <div className='relative group'>
                                    <Mask></Mask>
                                    <img className='block' src={recommend.picUrl} alt={recommend.name} />
                                </div>
                                    <span className=' text-[#333] group-hover:underline text-base block truncate'>{recommend.name}</span>
                            </Link>
                            <Link to="/" >
                                <div className='flex flex-row justify-between items-center'>
                                    <span className=' text-[#999] group-hover:underline text-sm block truncate'>{recommend.creator.nickname}</span>
                                    <div className='h-8 w-8 rounded-full overflow-hidden'>
                                        <img src={recommend.creator.avatarUrl} alt={recommend.creator.nickname} title={recommend.creator.nickname} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default Index