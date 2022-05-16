import { Player } from './state';
import { Song } from '../api/resource/types';
export const playReducer = (state: Player, action: { type: string, song?: Song }): Player => {
    switch (action.type) {
        case 'SWITCH_SONG':
            let newArr = state.songs.filter((item:Song)=>item.id!==action?.song?.id||0)
            let index = state.songs.findIndex((song: Song) => song.id === action.song?.id)
            return {
                songs: [...newArr,action.song!],
                currentSong: action.song,
                currentIndex: index>=0?index:state.songs.length,
                status: 'play'
            }
        case 'NEXT_SONG':
            return {
                songs: [...state?.songs || []],
                currentSong: state?.songs[state.currentIndex + 1],
                currentIndex: state.currentIndex===state.songs.length-1?state.currentIndex:state.currentIndex+ 1,
                status: 'play'
            }
        case 'PREV_SONG':
            return {
                songs: [...state.songs],
                currentSong: state.songs[state.currentIndex - 1],
                currentIndex:(state.currentIndex = 0 ? 0 : state.currentIndex) - 1,
                status: 'play'
            }
        default:
            return { ...state }
    }
}