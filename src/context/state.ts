import { Song } from "../api/resource/types"

export type Player = {
    songs:Song[]
    currentSong:Song|undefined
    currentIndex:number,
    status:'play'|'pause'
}
export const player:Player  ={
    songs:[],
    currentSong:undefined,
    currentIndex:0,
    status:'pause'
}
