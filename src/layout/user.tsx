import React, { lazy, Suspense } from 'react'
import Sidebar from './sidebar'
import { Route, Routes, Outlet } from 'react-router-dom';
import Loading from '../components/loading';
type Props = {}
const Home = lazy(() => import('../pages/home'));
const Category = lazy(() => import('../pages/category'));
const Star = lazy(() => import('../pages/star'));
const Activity = lazy(() => import('../pages/activity'));
const UserLogin = lazy(() => import('../pages/login'));
const UserRegsiter = lazy(() => import('../pages/register'));
const ErrorPage = lazy(() => import('../pages/404'));
const User = ({ }: Props) => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<UserRegsiter />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/' element={<LoggedRoute />} >
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/star' element={<Star />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}
const LoggedRoute = () => (
  <>
  <div className='flex flex-row'>
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
  </div>

  </>
)
export default User