import React from 'react'
import ReactPlayer from 'react-player'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
type Props = {}

const Player = (props: Props) => {

  return (
    <div className='fixed bottom-0 left-0 right-0 h-20 w-full z-10 bg-dark'>
        <div className='relative P-5'>
            <div className='absolute left-1/2 translate-x-1/2 flex h-20 items-center'>
                  <PlayCircleOutlineIcon className='text-gray-light text-2xl cursor-pointer' sx={{fontSize:'50px'}} />
                  <audio src='http://m7.music.126.net/20220514203239/de27eca5fc36d68e36bf54a203fbab50/ymusic/63d7/cdee/608f/8e389c0fe11d5f45b700b98f8f34d2d8.mp3'></audio>
            </div>
        </div>
    </div>
  )
}

export default Player