import React, { useEffect, useState } from 'react'
import { getAllCollection } from '../../../api/server/user';
import { useContext } from 'react';
import { Store } from '../../../context/auth-context';
import { Collection } from '../../../api/server/types';
import { getSongUrl, getSongDetail } from '../../../api/resource/get';
import { Song, TracksType } from '../../../api/resource/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: '歌名', width: 200 },
  { field: 'singer', headerName: '歌手', width: 120 }
]
const List = () => {
  const value = useContext(Store)
  const [songList, setSongList] = useState<TracksType[] | null>()
  useEffect(() => {
    getAllCollection({ email: value?.userInfo?.email || '' }).then(data => {
      let songRequests = data.data.list.map((collection: Collection) => parseInt(collection.mediaId))
      songRequests = songRequests.filter((request: number | undefined) => request)
      return getSongDetail({ id: songRequests })
    }).then(data => setSongList(data.songs))
  }, [])

  return (
    <div>
      <DataGrid
        autoHeight
        rows={songList || []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default List