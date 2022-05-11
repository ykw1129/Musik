import React, { useEffect } from 'react'
import { getPlaylistDetail } from '../../api/resource/get';
import { useParams } from 'react-router-dom';


function SongList() {
  const { id } = useParams()
  const fetch = () => {

    if(id){
      getPlaylistDetail({ id }).then(data=>{
        if(data.code===200){
            console.log(data)
        }
      })
    }

  }
  useEffect(() => {

  }, [])

  return (
    <section className='lg:w-[964px] m-auto'>
      <header>
        <div className=''>
          <img />
        </div>
      </header>
      <div>

      </div>
    </section>
  )
}

export default SongList