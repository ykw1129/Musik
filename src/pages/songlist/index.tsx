import React, { useEffect, useState } from 'react'
import { getPlaylistDetail } from '../../api/resource/get';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { PlayListType, TracksType } from '../../api/resource/types';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShareIcon from '@mui/icons-material/Share';
import dayjs from 'dayjs';
import List from './list';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import { getPlaylist, saveWyyPlaylist, getIsStar } from '../../api/server/user';
import { toast } from 'react-toastify';
import StarIcon from '@mui/icons-material/Star';



function SongList() {
  const value = useContext(Store)
  const navigate = useNavigate()
  const [star,setStar] = useState(false)
  const [songs, setSongs] = useState<TracksType[] | null>()
  const [playlist, setPlaylist] = useState<PlayListType | null>()
  const { id } = useParams()
  const fetch = () => {
    if (id) {

      getPlaylistDetail({ id }).then(data => {
        if (data.code === 200) {
          setPlaylist(data.playlist)
          setSongs(data.playlist.tracks)
          getIsStar({ uId: value?.userInfo?._id||'', listId:data.playlist.id}).then(data=>
            setStar(data.data.isStar)
            )
        } else {
          toast.error('获取歌曲列表失败')
        }
      })
    }

  }
  useAuth(fetch)
  const onStarPlaylist = () => {
    if (value?.userInfo?._id && playlist?.id) {
      saveWyyPlaylist({ uId: value?.userInfo?._id, listId: playlist?.id }).then(data => {
        if (data.code === 0) {
          toast.success('收藏成功')
          value.setUserInfo()
        } else {
          toast.error('收藏失败')
        }
      })
    } else {
      toast.warn('请先登录！')
    }
  }
  return (
    <section className='w-full'>
      <div className='bg-banner flex-1 py-10'>
        <div className='lg:w-[964px] m-auto '>
          <header className='flex backdrop-blur-0 bg-banner'>
            <ArrowBackIosIcon fontSize='large' className='hover:text-active cursor-pointer' onClick={() => navigate(-1)} />
            <div className='cursor-pointer w-96 h-94 bg-gray relative group shadow mr-5 overflow-hidden'>
              <img className='h-full block' src={playlist?.coverImgUrl} alt={playlist?.name} />
              <div className='z-10 h-20 w-full absolute -bottom-20 backdrop-blur-sm left-0 right-0 group-hover:bottom-0 transition-[bottom] duration-200 flex items-center justify-evenly'>
                {star ? <StarIcon onClick={onStarPlaylist} className='hover:text-active' fontSize='large' titleAccess='收藏' /> : <StarBorderIcon onClick={onStarPlaylist} className='hover:text-active' fontSize='large' titleAccess='收藏' />}

                <ShareIcon className='hover:text-active' fontSize='large' titleAccess='分享' />
              </div>
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
                      <li className='inline-block   leading-8 mr-3' key={index}>
                        <Link className='w-full border-gray-light px-5 h-8  border  hover:bg-active hover:text-[#fff] block rounded-2xl' to={`/category/playlist/${tag}`}>
                          {tag}
                        </Link>
                      </li>
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
        {songs ? <List songs={songs} /> : ''}
      </div>
    </section>
  )
}

export default SongList