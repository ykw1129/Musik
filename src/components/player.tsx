import React, { useEffect,useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Lyric, { HandlerParams } from 'lyric-resolver'
import { useContext } from 'react';
import { Store } from '../context/auth-context';
const Player = () => {
  const [text,setText] = useState<string>('')
  const value = useContext(Store)

  const handlePrev = () =>{
    value?.dispatch({type:'PREV_SONG'})
  }
  const handleNext = () =>{
    value?.dispatch({ type: 'NEXT_SONG' })
  }
  const handleListen = (e:any) =>{
    console.log(e)
  }
  const setLyric = () =>{
    const currentLyric = new Lyric(value?.state.currentSong?.lyric||'', handleLyric)
    function handleLyric(payload: HandlerParams): void {
      const { curLineNum, txt } = payload
      setText(txt)
      console.log(curLineNum, txt)
    }
    handleLyric({ curLineNum: 0, txt:'123'})
    play()
    function play(): void {
      currentLyric.play()
    }
    function stop(): void {
      currentLyric.stop()
    }
    function togglePlay(): void {
      currentLyric.togglePlay()
    }
  }

  useEffect(() => {
    setLyric()
  },[])

  return (
    <div className='fixed bottom-0 left-0 right-0 w-full z-10 bg-dark'>
        <div className='relative'>
            <div className='flex h-10 items-center justify-between'>
                {text}
            </div>
            <div className='flex h-20 items-center'>
                  <AudioPlayer
                    className='bg-black'
                    showSkipControls
                    src={value?.state.currentSong?.url}
                    onClickPrevious={handlePrev}
                    onClickNext={handleNext}
                    onListen={handleListen}
                  />
            </div>
        </div>
    </div>
  )
}

export default Player

