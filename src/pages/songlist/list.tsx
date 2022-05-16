import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarBorder from '@mui/icons-material/StarBorder';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { TracksType, Song } from '../../api/resource/types';
import { getSongUrl, getSongLyrics } from '../../api/resource/get';
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import { Snowshoeing } from '@mui/icons-material';

export default function SongList({ songs }: { songs: TracksType[] }) {
   const value = useContext(Store)
    const setFlex = (basis: string) => ({ flex: '0 1 auto', flexBasis: basis })
    const onPlayer = (id:number) =>{

        return ()=>{
            let song: Song
            getSongUrl({id}).then(data=>{
                if(data.data){
                    let currentSong = songs.find((song:TracksType)=>song.id===id)
                     song = {
                        id:data.data[0].id,
                        url:data.data[0].url,
                        urlSource:data.data[0].urlSource,
                        ar:currentSong?.ar||[],
                        al:currentSong?.al
                    }
                    return getSongLyrics({id})

                }
            }).then(data=>{
                song.lyric = data?.lrc.lyric||''
                song.tlyric = data?.tlyric.lyric||''
                value?.dispatch({ type: 'SWITCH_SONG', song })
            })
        }
    }
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
                <ListItemButton key={song.id} onClick={onPlayer(song.id)}>
                    <ListItemText sx={setFlex('20px')} secondary={index+1} />
                    <ListItemIcon>
                        <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText  primary={<span className='block truncate' >{song.name}</span>} />
                    <ListItemText sx={setFlex('30%')} primary={<span className='block truncate' >{song.al.name}</span>} />
                    <div className='flex basis-20 flex-row-reverse'>
                            <StarBorder />
                    </div>

                </ListItemButton>
            )}
        </List>
    );
}
