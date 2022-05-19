import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom'
const Heading =({title,side = 'left'}:{title:string|undefined,side?:'left'|'right'}) => {
  const navigate = useNavigate()
  return (
    <header className='flex border-b border-b-line pb-10 mb-8 items-center justify-between'>
      <ArrowBackIosIcon fontSize='large' className='cursor-pointer hover:text-active' onClick={()=>navigate(-1)} />
      <h1 className={`text-4xl text-${side}   font-bold`}>{title||'分类'}</h1>
    </header>
  )
}

export default Heading