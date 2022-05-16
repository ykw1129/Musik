import React, { useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react';
import { Store } from '../context/auth-context';
const Player = () => {
  const value = useContext(Store)
  const handlePrev = () =>{
    value?.dispatch({type:'PREV_SONG'})
  }
  const handleNext = () =>{
    value?.dispatch({ type: 'NEXT_SONG' })
  }
  useEffect(() => {
    console.log(value?.state)
  })

  return (
    <div className='fixed bottom-0 left-0 right-0 h-20 w-full z-10 bg-dark'>
        <div className='relative'>
            <div className='flex h-20 items-center'>
                  <AudioPlayer
                    className='bg-black'
                    showSkipControls
                    src={value?.state.currentSong?.url}
                    onClickPrevious={handlePrev}
                    onClickNext={handleNext}
                  />
            </div>
        </div>
    </div>
  )
}

export default Player