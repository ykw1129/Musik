import React, { useEffect, useState } from 'react'
import { getPlaylist } from '../../../api/server/user';
import { PlaylistCollection } from '../../../api/server/types';
import { getPlaylistDetail } from '../../../api/resource/get';
import { PlayListType } from '../../../api/resource/types';
import { Link } from 'react-router-dom';
import Mask from '../../../components/recommend/mask';

type Props = {}

const List = (props: Props) => {
  const [playlists, setPlaylists] = useState<PlayListType[]|null>()
  useEffect(() => {
    getPlaylist({}).then(data => {
      const list = data.data.list.map((item: PlaylistCollection) => getPlaylistDetail({ id: item.listId }))
      return Promise.allSettled(list)
    }).then((playlist: PromiseSettledResult<any>[]) => {

     let results: PlayListType[] = playlist.map((item: PromiseSettledResult<any>) => {
        if (item.status === 'fulfilled') {
          return item.value.playlist
        }
      })
      setPlaylists(results)
    })
  }, [])
  return (
    <div className='w-full p-5'>
      <ul className='w-[964px] m-auto'>
        {
          playlists?.map((playlist:PlayListType) =>
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