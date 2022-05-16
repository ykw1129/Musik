import { Song } from "../api/resource/types"
import { User } from '../api/server/types';
export type Player = {
    songs: Song[]
    currentSong: Song | undefined
    currentIndex: number,
    status: 'play' | 'pause'
}
export const player: Player = {
    songs: [],
    currentSong: undefined,
    currentIndex: 0,
    status: 'pause'
}
export const userInfo:User = {
    status: 1,
    fileIds: [],
    friendsIds: [],
    collections: [],
    dynamics: [],
    playlists: [],
    _id: '',
    email: '',
    nickName: '',
}