import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { getHighQualityPlayList } from '../../api/resource/get';
import { Link} from 'react-router-dom';
import { PlayListType } from '../../api/resource/types';
import { toast } from 'react-toastify';
import Mask from '../../components/recommend/mask';
function List({cat,order='hot',limit=20}:{cat?:string,order?:'new'|'hot',limit?:number}) {
    const [playlists, setPlaylists] = useState<PlayListType[] | undefined>()
    const fetch = () => {
        getHighQualityPlayList({ cat }).then(data => {
            if (data.code === 200) {
                setPlaylists(data.playlists)
            } else {
                toast.error('获取标签歌单失败')
            }
        })
    }
    useAuth(fetch,[cat,order,limit])
    return (
        <div>
            <ul>
                {
                    playlists?.map((playlist) =>
                        <li key={playlist.id} className='inline-block w-1/5 pr-4 pb-3'>
                            <Link to={`/category/songlist/${playlist.id}`} className="group">
                                <div className='relative group flex bg-gray-light w-[177px] h-[177px]'>
                                    <Mask></Mask>
                                    <img className='block' src={playlist.coverImgUrl} alt={playlist.name} />
                                </div>
                                <span className=' text-[#333] group-hover:underline text-base block h-14 text-ellipsis overflow-hidden'>{playlist.name}</span>
                            </Link>
                            <Link to="/" >
                                <div className='flex flex-row justify-between items-center'>
                                    <span className=' text-[#999] group-hover:underline text-sm block truncate'>{playlist.creator.nickname}</span>
                                    <div className='h-8 w-8 rounded-full overflow-hidden'>
                                        <img src={playlist.creator.avatarUrl} alt={playlist.creator.nickname} title={playlist.creator.nickname} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }

            </ul>
        </div>
    )
}

export default List