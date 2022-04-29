import SearchIcon from '@mui/icons-material/Search';
import { Icon, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import React, { ReactChild, ReactNode } from 'react'
import { NavLink } from 'react-router-dom';
import ReactElement from 'react';
const ICON_STYLE = {
  fontSize: 24, marginRight: '10px'
}
type Props = {}
const index = () => {
  return (
    <header className='w-60 h-screen bg-black'>
      <div className='flex items-center justify-between px-8 py-2'>
        <h1 className='text-2xl font-bold text-[#fff]'>Musik</h1>
        <SearchIcon sx={{ fontSize: 25 }} className='text-gray-light' />
      </div>
      <section className='px-8 py-2'>
        <div id='user-info' className='border-y border-[hsla(0,0%,84.7%,.13)]'>
          <div className='flex items-center cursor-pointer px-2 py-4'>
            <AccountCircleIcon sx={ICON_STYLE} className='text-[#999]' />
            <span className='text-[#999] text-base max-w-xs  ml-1'>User</span>
          </div>
        </div>
        <div id='user-menu' className='mt-10'>
          {/* <Nav /> */}
        </div>
      </section>
    </header>
  )
}
export default index

type NavLinkType = {
  path: string
  ActiveIcon: HTMLLIElement
  Icon: HTMLLIElement
}
const Nav = (navList: NavLinkType[]) => {
  return (
    <ul>
      {navList.map((link: NavLinkType): ReactNode => {
        return <li className='px-2 py-3'>
          <NavLink to={`/${link.path}`}>
            <HomeOutlinedIcon sx={ICON_STYLE} className='text-[#999]' />
            <span className='text-[#999] text-base max-w-xs ml-1 align-bottom'>Home</span>
          </NavLink>
        </li>
      })}
    </ul>
  )
}