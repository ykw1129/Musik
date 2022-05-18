import React, { useEffect, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarBorder from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { TracksType, Song } from '../../api/resource/types';
import { getSongUrl, getSongLyrics } from '../../api/resource/get';
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import { Snowshoeing } from '@mui/icons-material';
import { addCollection, getUserInfo, getAllCollection } from '../../api/server/user';
import { localGet } from '../../utils/localStorage';
import { toast } from 'react-toastify';
import { Collection } from '../../api/server/types';

export default function SongList({ songs }: { songs: TracksType[] }) {
    const value = useContext(Store)
    const [collection, setCollection] = useState<number[] | null>()
    const setFlex = (basis: string) => ({ flex: '0 1 auto', flexBasis: basis })
    const onPlayer = (id: number) => {
        return () => {
            let song: Song
            getSongUrl({ id }).then(data => {
                if (data.data) {
                    let currentSong = songs.find((song: TracksType) => song.id === id)
                    song = {
                        id: data.data[0].id,
                        url: data.data[0].url,
                        urlSource: data.data[0].urlSource,
                        ar: currentSong?.ar || [],
                        al: currentSong?.al
                    }
                    return getSongLyrics({ id })

                }
            }).then(data => {
                song.lyric = data?.lrc.lyric || ''
                song.tlyric = data?.tlyric?.lyric || ''
                value?.dispatch({ type: 'SWITCH_SONG', song })
            })
        }
    }
    const onLikeSong = (id: number) => {
        return () => {
            if (value?.userInfo?._id) {
                addCollection({ uid: value?.userInfo?._id, mediaId: id })
                    .then(data => {
                        toast.success("收藏成功")
                        return getAllCollection({ email: value.userInfo?.email || '' })
                    }).then(data => {
                        let arr = data.data.list.map((item: Collection) => parseInt(item.mediaId))
                        arr = arr.filter((item: string) => item)
                        setCollection(arr)
                    })
            } else {
                toast.warn('请先登录！')
            }
        }
    }
    const isHadStar = (id: number) => {
        return collection?.includes(id) ? <StarIcon className='text-active' /> : <StarBorder />
    }
    useEffect(() => {
        getAllCollection({ email: value?.userInfo?.email || '' }).then(data => {
            let arr = data.data.list.map((item: Collection) => parseInt(item.mediaId))
            arr = arr.filter((item: string) => item)
            setCollection(arr)
        })
    }, [value?.userInfo?.email])

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    歌单
                </ListSubheader>
            }
        >
            {songs.map((song: TracksType, index) =>
                <ListItemButton className='flex w-full' key={song.id} >
                    <div className='flex flex-1' onClick={onPlayer(song.id)}>
                        <ListItemText sx={setFlex('20px')} secondary={index + 1} />
                        <ListItemIcon >
                            <MusicNoteIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ maxWidth: '500px' }} primary={<span className='block truncate' >{song.name}</span>} />
                        <ListItemText sx={setFlex('30%')} primary={<span className='block truncate' >{song.ar.map((item)=>item.name).join('/')}</span>} />
                    </div>
                    <div className='flex basis-10 flex-row-reverse' onClick={onLikeSong(song.id)} title="like">
                        {isHadStar(song.id)}
                    </div>
                </ListItemButton>
            )
            }
        </List >
    );
}
