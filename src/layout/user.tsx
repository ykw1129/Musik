import React, { lazy, Suspense } from 'react'
import Sidebar from './sidebar'
import { Route, Routes, Outlet } from 'react-router-dom';
import Loading from '../components/loading';
import Footer from '../layout/footer'
const Home = lazy(() => import('../pages/home'));
const Category = lazy(() => import('../pages/category'));
const Star = lazy(() => import('../pages/star'));
const Activity = lazy(() => import('../pages/activity'));
const UserLogin = lazy(() => import('../pages/login'));
const UserRegsiter = lazy(() => import('../pages/register'));
const ErrorPage = lazy(() => import('../pages/404'));
const PlayList = lazy(() => import('../pages/playlist'));
const SongList = lazy(() => import('../pages/songlist'))
const User = () => {
  return (
    <>
      <Routes>

        <Route path='/' element ={<NoLoggedRoute />} >
          <Route path='register' element={<UserRegsiter />} />
          <Route path='login' element={<UserLogin />} />
        </Route>
        <Route path='/' element={<LoggedRoute />} >
          <Route index element={<Home />} />
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
      <main className='flex-col flex flex-1 justify-center items-center min-h-screen bg-background'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </main>
    </div>
  </>
)
const NoLoggedRoute = () =>(
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