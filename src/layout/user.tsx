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
const List = lazy(() => import('../pages/list'));
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
            <Route path=':id' element={<List />} />
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
      <main className='flex-1'>
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