import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

export default function IconMenu() {
    return (
        <header className='w-80 bg-black min-h-screen flex-shrink-0'>
            <div className='flex items-center justify-between px-8 py-2'>
                <h1 className='text-2xl font-bold text-[#fff]'>Musik</h1>
            </div>
            <section className='px-8 py-2'>
                <div id='user-info' className='border-y border-[hsla(0,0%,84.7%,.13)]'>
                    <div className='flex items-center cursor-pointer px-2 py-4'>
                        <span className='text-[#999] text-base max-w-xs  ml-1'>User</span>
                    </div>
                </div>
                <div id='user-menu' className='mt-10'>
                    <Paper sx={{ width: 320, maxWidth: '100%' }}>
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCut fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Cut</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    ⌘X
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopy fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    ⌘C
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPaste fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    ⌘V
                                </Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Web Clipboard</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </div>
            </section>
        </header>

    );
}
