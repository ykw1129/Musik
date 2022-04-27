import React,{Suspense} from 'react'
import Sidebar from './sidebar'
import Home from '../pages/home'
import { Route,Routes } from 'react-router-dom';
type Props = {}

export default function User({}: Props) {
  return (
    <div className='flex flex-row'>
          <Sidebar />
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
    </div>
  )
}