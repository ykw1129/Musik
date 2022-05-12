import React, { useEffect, useState } from 'react'
import { getPlaylistDetail } from '../../api/resource/get';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { PlayListType } from '../../api/resource/types';
import dayjs from 'dayjs';
import List from './list';



function SongList() {
  const [playlist, setPlaylist] = useState<PlayListType | null>()
  const { id } = useParams()
  const fetch = () => {
    if (id) {
      getPlaylistDetail({ id }).then(data => {
        if (data.code === 200) {
          setPlaylist(data.playlist)
        } else {
          toast.error('获取歌曲列表失败')
        }
      })
    }

  }
  useAuth(fetch)

  return (
    <section className='w-full'>
      <div className='bg-banner flex-1 py-10'>
        <div className='lg:w-[964px] m-auto '>
          <header className='flex backdrop-blur-0 bg-banner'>
            <div className='w-96 h-94 mr-5 bg-gray'>
              <img className='h-full' src={playlist?.coverImgUrl} alt={playlist?.name} />
            </div>
            <div className='flex-1'>
              <h1 className='font-bold text-ellipsis overflow-hidden h-20 text-3xl'>{playlist?.name}</h1>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center'>
                  <div className='w-14 h-14 bg-gray-light mr-5'>
                    <img src={playlist?.creator.avatarUrl} alt={playlist?.creator.nickname} />
                  </div>
                  <span className='text-lg'>{playlist?.creator.nickname}</span>
                </div>
                <span className='text-gray'>{dayjs(playlist?.createTime).format('YYYY-MM-DD')}</span>
              </div>
              <div className='flex items-center mb-5'>
                <span>标签：</span>
                <ul>
                  {
                    playlist?.tags.map((tag, index) =>
                      <li className='inline-block px-5 h-8 border border-gray-light rounded-2xl leading-8 mr-3' key={index}>{tag}</li>
                    )
                  }
                </ul>
              </div>
              <span className='line-clamp-[8] indent-8 text-[#666] text-base'>{playlist?.description}</span>
            </div>
          </header>
        </div>
      </div>
      <div className='lg:w-[964px] m-auto '>
        <List />
      </div>
    </section>
  )
}

export default SongList