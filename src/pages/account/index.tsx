import React, { useEffect, useState } from 'react'
import { User } from '../../api/server/types'
import { getUserInfo } from '../../api/server/user'
import avatar from '../../assets/images/avatar.jpg'
import { localGet } from '../../utils/localStorage';
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import dayjs from 'dayjs';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import SongList from './song/list'
import PlayList from './playlist/list'
import DynamicList from './dynamic/list'

import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
const Index = () => {
  const value = useContext(Store)
  const [tabs, setTabs] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabs(newValue);
  };
  return (
    <div className='w-full flex flex-col'>
      <header className='w-full h-[500px] bg-user-background bg-cover bg-center flex flex-col justify-center items-center'>
        <div className='w-40 h-40 rounded-full overflow-hidden mb-5'>
          <img className='w-full h-full' src={avatar} alt='alt' />
        </div>
        <h1 className='text-3xl text-gray-light mb-2'>{value?.userInfo?.nickName}</h1>
        <p className='text-gray-light mb-2'><span>注册时间：</span><span>{dayjs(value?.userInfo?.registerTime).format('YYYY-MM-DD hh:mm:ss')}</span></p>
        <p className='w-[480px] mx-auto flex'>
          <span className='flex-1 text-center text-gray-light border-r border-gray-light px-5'>喜欢的歌:<b className='ml-2'>{value?.userInfo?.collections.length || 0}</b></span>
          <span className='flex-1 text-center text-gray-light border-r border-gray-light px-5'>收藏的歌单:<b className='ml-2'>{value?.userInfo?.playlists.length || 0}</b></span>
          <span className='flex-1 text-center text-gray-light border-gray-light px-5'>动态:<b className='ml-2'>{value?.userInfo?.dynamics.length || 0}</b></span>
        </p>
      </header>
      <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabs}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="喜欢的歌" icon={<GradeOutlinedIcon />} iconPosition="start" value="1" />
                <Tab label="收藏的歌单" icon={<LibraryMusicIcon />} iconPosition="start" value="2" />
                <Tab label="我的的歌单" icon={<LibraryMusicIcon />} iconPosition="start" value="3" />
                <Tab label="我的动态" icon={< LocalActivityOutlinedIcon />} iconPosition="start" value="4" />
              </TabList>
            </Box>
            <TabPanel sx={{ padding: 0 }} value="1">
              <SongList />
            </TabPanel>
            <TabPanel sx={{ padding: 0 }} value="2">
              <PlayList />
            </TabPanel>
            <TabPanel sx={{ padding: 0 }} value="3">
              <DynamicList />
            </TabPanel>
            <TabPanel sx={{ padding: 0 }} value="4">
              <DynamicList />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default Index