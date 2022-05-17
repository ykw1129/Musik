import React, { useEffect, useRef, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Lyric, { HandlerParams, Lines } from 'lyric-resolver'
import { useContext } from 'react';
import { Store } from '../context/auth-context';
let currentLyric: Lyric
const Player = () => {
  const [text, setText] = useState<string>('')
  const playerRef = useRef<AudioPlayer>(null)
  const value = useContext(Store)
  const currentSong = value?.state.currentSong
  const handleLyric = (payload: HandlerParams): void => {
  }
  const handlePrev = () => {
    value?.dispatch({ type: 'PREV_SONG' })
  }
  const handleNext = () => {
    value?.dispatch({ type: 'NEXT_SONG' })
  }
  const handlePlay = () => {
    currentLyric.play()
  }
  const handlePause = () => {
    currentLyric.stop()
  }
  const handleListen = () => {
    const currentTime = playerRef.current?.audio?.current?.currentTime || 0
    let currentLine = currentLyric.lines.find((line: Lines) => Math.abs(line.lineTime - Math.floor(currentTime * 1000)) < 1000)
    if (currentLine) {
      setText(currentLine.txt)
    }
  }

  useEffect(() => {
    currentLyric = new Lyric(currentSong?.lyric || '', handleLyric)
  }, [currentSong])

  return (
    <div className='fixed bottom-0 left-0 right-0 w-full z-10 bg-dark'>
      <div className='relative'>
        <div className='flex h-20 relative items-center px-[15px]  w-full'>
          <div className='flex items-center'>
            <div className='w-10 h-10 bg-gray mr-3'>
              <img className='block w-full h-full' src={currentSong?.al?.picUrl} alt={currentSong?.al?.name} />
            </div>
            <span className='text-seconds font-thin '>{currentSong?.al?.name}</span>
            <span className='text-seconds text-xl mx-2'>-</span>
            <span className='text-seconds align-bottom inline-block'>{currentSong?.ar.map((item) => item.name).join('/')}</span>
          </div>
          <span className='text-gray-light block absolute left-1/2 -translate-x-1/2 text-lg'>{text}</span>
        </div>
        <div className='flex h-20 items-center'>
          <AudioPlayer
            onListen={handleListen}
            ref={playerRef}
            className='bg-black'
            showSkipControls
            src={currentSong?.url}
            onPlay={handlePlay}
            onPause={handlePause}
            onClickPrevious={handlePrev}
            onClickNext={handleNext}
          />
        </div>
      </div>
    </div>
  )
}

export default Player

