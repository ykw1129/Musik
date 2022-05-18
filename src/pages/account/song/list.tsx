import React, { useEffect, useState } from 'react'
import { getAllCollection } from '../../../api/server/user';
import { useContext } from 'react';
import { Store } from '../../../context/auth-context';
import { Collection } from '../../../api/server/types';
import { getSongUrl, getSongDetail } from '../../../api/resource/get';
import { Song, TracksType } from '../../../api/resource/types';

type Props = {}

const List = (props: Props) => {
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
      <ul>
        {songList?.map((song: TracksType) =>
          <li key={song.id}>{song.name}</li>
        )}
      </ul>
    </div>
  )
}

export default List