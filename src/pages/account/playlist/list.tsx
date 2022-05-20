import React, { useEffect } from 'react'
import { getPlaylist } from '../../../api/server/user';

type Props = {}

const List = (props: Props) => {
  useEffect(() => {
      getPlaylist({}).then(data=>console.log(data))
  }, [])
  return (
    <div className='w-full p-5'>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default List