import { Player } from './state';
import { Song } from '../api/resource/types';
export const playReducer = (state: Player, action: { type: string, song?: Song }):Player => {
    switch (action.type) {
        case 'SWITCH_SONG':
            return {
                songs: [...new Set([...state.songs, action.song as Song])],
                currentSong: action.song,
                currentIndex: state.songs.length,
                status: 'play'
            }
        case 'NEXT_SONG':
            return {
                songs: [...state?.songs||[]],
                currentSong: state?.songs[state.currentIndex + 1],
                currentIndex: state.currentIndex + 1,
                status: 'play'
            }
        case 'PREV_SONG':
            return {
                songs: [...state.songs],
                currentSong: state.songs[state.currentIndex - 1],
                currentIndex: state.currentIndex - 1,
                status: 'play'
            }
        default:
            return {...state}
    }
}