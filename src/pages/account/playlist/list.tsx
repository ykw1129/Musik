import React, { useEffect, useState } from 'react'
import { getPlaylist } from '../../../api/server/user';

type Props = {}

const List = (props: Props) => {
  const [list,setList] = useState()
  useEffect(() => {
      getPlaylist({}).then(data=>{
        setList(data.data.list)
      })
  }, [])
  return (
    <div className='w-full p-5'>
      <ul >
        {
/*             list.map((item)=>{
              <li className='inline-block mr-2'>
                <div className='w-40 h-40'>
                  <img />
                </div>
              </li>
            }) */
        }

      </ul>
    </div>
  )
}

export default List