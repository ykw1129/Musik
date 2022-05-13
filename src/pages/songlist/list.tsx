import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarBorder from '@mui/icons-material/StarBorder';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { TracksType } from '../../api/resource/types';

export default function SongList({ songs }: { songs: TracksType[] }) {
    const setFlex = (basis: string) => ({ flex: '0 1 auto', flexBasis: basis })
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
                <ListItemButton key={song.id}>
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
