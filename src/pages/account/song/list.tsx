import React, { useEffect, useState } from 'react'
import { getAllCollection, removeCollection } from '../../../api/server/user';
import { useContext } from 'react';
import { Store } from '../../../context/auth-context';
import { Collection } from '../../../api/server/types';
import { getSongUrl, getSongDetail, getSongLyrics } from '../../../api/resource/get';
import { Song, TracksType, ArType } from '../../../api/resource/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { toast } from 'react-toastify';
import { StyledDataGrid } from '../../admin/index';

const List = () => {
  const value = useContext(Store)
  const [loading, setLoading] = useState<boolean>(false)
  const [stars, setStars] = useState<Collection[] | null>()
  const [songs, setSongs] = useState<TracksType[] | null>()
  const columns: GridColDef[] = [
    { field: 'img', headerName: '封面', renderCell: (params) => <div className='w-10 h-10'><img className='block w-full h-full' src={params.row.al.picUrl} alt={params.row.al.name} /></div> },
    { field: 'name', headerName: '歌名', width: 480 },
    { field: 'singer', headerName: '歌手', width: 300, valueGetter: (params) => params.row.ar.map((item: ArType) => item.name).join('/') },
    { field: 'album', headerName: '专辑', width: 300, valueGetter: (params) => params.row.al.name },
    {
      field: 'operate', headerName: '操作', width: 400, renderCell: (params) => {
        return <div className='flex items-center'>
          <PlayCircleOutlineIcon titleAccess='播放' fontSize='large' onClick={onPlayer(params.row.id)} className='hover:text-active cursor-pointer ml-auto my-auto mr-5' />
          <DoDisturbOnOutlinedIcon onClick={onCancelStar(params.row.id)} titleAccess='取消收藏' fontSize='large' className='hover:text-active cursor-pointer  ml-auto my-auto mr-5' />
        </div>
      }
    }
  ]
  const onPlayer = (id: number) => {
    return () => {
      let song: Song
      getSongUrl({ id }).then(data => {
        if (data.data) {
          let currentSong = songs?.find((song: TracksType) => song.id === id)
          song = {
            id: data.data[0].id,
            url: data.data[0].url,
            urlSource: data.data[0].urlSource,
            ar: currentSong?.ar || [],
            al: currentSong?.al
          }
          return getSongLyrics({ id })

        }
      }).then(data => {
        song.lyric = data?.lrc.lyric || ''
        song.tlyric = data?.tlyric?.lyric || ''
        value?.dispatch({ type: 'SWITCH_SONG', song })
      })
    }
  }
  const onCancelStar = (id: number) => {
    return () => {
      let current = stars?.find((star: Collection) => parseInt(star.mediaId) === id)
      removeCollection({ id:current?._id||'' }).then(data => {
        if(data?.code===0){
          toast.success('删除成功')
        }else{
          toast.error('取消失败')
        }
      })
    }
  }
  useEffect(() => {
    setLoading(true)
    const getCollections = () =>{
      getAllCollection({ email: value?.userInfo?.email || '' }).then(data => {
        setStars(data.data.list)
        let songRequests = data.data.list.map((collection: Collection) => parseInt(collection.mediaId))
        songRequests = songRequests.filter((request: number | undefined) => request)
        return getSongDetail({ id: songRequests })
      }).then(data => {
        setLoading(false)
        setSongs(data.songs)
      })
    }
    getCollections()
  }, [])

  return (
      <StyledDataGrid
        loading={loading}
        sx={{ borderLeft: 'none', borderRight: 'none' }}
        autoHeight
        rows={songs || []}
        columns={columns}
        disableSelectionOnClick={true}
      />
  )
}

export default List