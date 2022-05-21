import React, { lazy, Suspense } from 'react'
import Sidebar from './user/sidebar'
import AdminSidebar from './admin/sidebar';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Loading from '../components/loading';
import Footer from './footer'
import Player from '../components/player';
import { localGet } from '../utils/localStorage';
import { useContext, useEffect } from 'react';
import { Store } from '../context/auth-context';
const Home = lazy(() => import('../pages/home'));
const Category = lazy(() => import('../pages/category'));
const Star = lazy(() => import('../pages/star'));
const Activity = lazy(() => import('../pages/activity'));
const UserLogin = lazy(() => import('../pages/login'));
const UserRegsiter = lazy(() => import('../pages/register'));
const ErrorPage = lazy(() => import('../pages/404'));
const PlayList = lazy(() => import('../pages/playlist'));
const SongList = lazy(() => import('../pages/songlist'))
const Admin = lazy(() => import('../pages/admin'))
const UserManage = lazy(() => import('../pages/admin/user-manage'))
const DynamicManage = lazy(() => import('../pages/admin/dynamic-manage'))
const FileManage = lazy(() => import('../pages/admin/file-manage'))
const CommentManage = lazy(() => import('../pages/admin/comment-manage'))
const Account = lazy(() => import('../pages/account'))

const User = () => {
  const value = useContext(Store)
  useEffect(() => {

  }, [value])

  return (
    <>
      <Routes>
        <Route path='/' element={<AdminNoLoggedRoute />} >
          <Route path='admin' element={value?.isAdmin ? <Navigate to="/user" replace /> : <Admin />} />
        </Route>
        {value?.isAdmin ? <Route path='/' element={<AdminLoggedRoute />} >
          <Route path='user' element={<UserManage />} />
          <Route path='file' element={<FileManage />} />
          <Route path='dynamic' element={<DynamicManage />} />
          <Route path='comment' element={<CommentManage />} />
        </Route> : ''}

        <Route path='/' element={<NoLoggedRoute />} >
          <Route path='register' element={<UserRegsiter />} />
          <Route path='login' element={<UserLogin />} />
        </Route>
        <Route path='/' element={<LoggedRoute />} >
          <Route index element={<Home />} />
          {value?.userInfo ? <Route path='/account' element={<Account />} /> : ''}
          <Route path='/category'>
            <Route index element={<Category />} />
            <Route path='playlist/:name' element={< PlayList />} />
            <Route path='songlist/:id' element={<SongList />} />
          </Route>
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
      <main className='flex-col flex flex-1 justify-center items-center min-h-screen bg-background pb-40'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </main>
      <Player />
    </div>
  </>
)
const NoLoggedRoute = () => (
  <>
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 flex bg-gradient-to-t from-[#fff1eb] to-[#ace0f9]'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  </>
)
const AdminLoggedRoute = () => (
  <>
    <div className='flex flex-row'>
      <AdminSidebar />
      <main className='flex-col flex flex-1 justify-center items-center min-h-screen bg-background'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </main>
    </div>
  </>
)
const AdminNoLoggedRoute = () => (
  <>
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 flex bg-gradient-to-t from-[#fff1eb] to-[#ace0f9]'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  </>
)
export default User