import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
type Props = {}


const index = () => {
  return (
    <header className='w-80 h-screen bg-gray-dark'>
      <div className='flex items-center justify-between px-8 py-2'>
        <h1 className='text-3xl font-bold text-gray-light'>Musik</h1>
        <SearchIcon sx={{fontSize:30}} className='text-gray-light' />
      </div>
    </header>
  )
}
export default index