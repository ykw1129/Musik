import React, { useEffect, useState } from 'react'
import { getAllCollection } from '../../../api/server/user';
import { useContext } from 'react';
import { Store } from '../../../context/auth-context';
import { Collection } from '../../../api/server/types';
import { getSongUrl, getSongDetail, getSongLyrics } from '../../../api/resource/get';
import { Song, TracksType, ArType } from '../../../api/resource/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from '@mui/material';


const List = () => {
  const value = useContext(Store)
  const [loading, setLoading] = useState<boolean>(false)
  const [songs, setSongs] = useState<TracksType[] | null>()
  const columns: GridColDef[] = [
    { field: 'img', headerName: '封面', renderCell: (params) => <div className='w-10 h-10'><img className='block w-full h-full' src={params.row.al.picUrl} alt={params.row.al.name} /></div> },
    { field: 'name', headerName: '歌名', width: 400 },
    { field: 'singer', headerName: '歌手', width: 300, valueGetter: (params) => params.row.ar.map((item: ArType) => item.name).join('/') },
    { field: 'album', headerName: '专辑', width: 150, valueGetter: (params) => params.row.al.name },
    {
      field: 'operate', headerName: '操作', width: 500, renderCell: (params) => {
        return <div className='flex items-center'>
                 <PlayCircleOutlineIcon fontSize='large' onClick={onPlayer(params.row.id)} className='hover:text-active cursor-pointer ml-auto my-auto mr-5' />
          <HighlightOffIcon fontSize='large' className='hover:text-active cursor-pointer  ml-auto my-auto mr-5' />
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
  useEffect(() => {
    setLoading(true)
    getAllCollection({ email: value?.userInfo?.email || '' }).then(data => {
      let songRequests = data.data.list.map((collection: Collection) => parseInt(collection.mediaId))
      songRequests = songRequests.filter((request: number | undefined) => request)
      return getSongDetail({ id: songRequests })
    }).then(data => {
      setLoading(false)
      setSongs(data.songs)
    })
  }, [])

  return (
    <div>
      <DataGrid
        loading={loading}
        sx={{ borderLeft: 'none', borderRight: 'none' }}
        autoHeight
        rows={songs || []}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick={true}
      />
    </div>
  )
}

export default List