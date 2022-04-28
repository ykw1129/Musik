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
import React from 'react'
type Props = {}
const routes = [
  {path:'/',name:'Home',},
  {path:'/star',name:'Star'},
  {path:'/topic',name:'Topic'},
  {path:'/event',name:'Event'}
]

const index = () => {
  return (
    <header className='w-60 h-screen bg-black'>
      <div className='flex items-center justify-between px-8 py-2'>
        <h1 className='text-2xl font-bold text-[#fff]'>Musik</h1>
        <SearchIcon sx={{ fontSize: 25 }} className='text-gray-light' />
      </div>
      <section className='px-8 py-2'>
        <div id='user-info' className='border-y border-[hsla(0,0%,84.7%,.13)]'>
          <div className='flex items-center cursor-pointer'>
            <AccountCircleIcon sx={{ fontSize: 24 }} className='text-[#999]' />
            <span className='text-[#999] text-base max-w-xs  ml-1'>User</span>
          </div>
        </div>
        <div id='user-menu' className='mt-10'>
          <ul>
            <li>
              <HomeOutlinedIcon sx={{ fontSize: 24 }} className='text-[#999]' />
              <span className='text-[#999] text-base max-w-xs ml-1'>Home</span>
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}
export default index