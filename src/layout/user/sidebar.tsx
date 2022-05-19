import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { localGet } from '../../utils/localStorage';
import { Store } from '../../context/auth-context';
const ICON_STYLE = {
  fontSize: 24, marginRight: '10px'
}
const links: NavLinkType[] = [
  {
    path: '/',
    ActiveIcon: (<HomeIcon sx={ICON_STYLE} className='text-active' />),
    NavIcon: (<HomeOutlinedIcon sx={ICON_STYLE} className='text-[#999]' />),
    name: '主页'
  },
  {
    path: '/category',
    ActiveIcon: (<BorderAllIcon sx={ICON_STYLE} className='text-active' />),
    NavIcon: (<BorderAllOutlinedIcon sx={ICON_STYLE} className='text-[#999]' />),
    name: '分类'
  },
  {
    path: '/star',
    ActiveIcon: (<GradeIcon sx={ICON_STYLE} className='text-active' />),
    NavIcon: (<GradeOutlinedIcon sx={ICON_STYLE} className='text-[#999]' />),
    name: '收藏'
  },
  {
    path: '/activity',
    ActiveIcon: (<LocalActivityIcon sx={ICON_STYLE} className='text-active' />),
    NavIcon: (<LocalActivityOutlinedIcon sx={ICON_STYLE} className='text-[#999]' />),
    name: '专题'
  }
]

const Sidebar = () => {
  const value = useContext(Store)
  const logout = () => {
    value?.setUserInfo(undefined)
    localStorage.clear()
  }
  const LoginAvatar: () => JSX.Element = () => {
    return <NavLink to={value?.userInfo ? '/account' : '/login'} className={({ isActive }) => isActive ? 'text-active text-base max-w-xs  ml-1 flex items-center' : 'text-[#999] text-base max-w-xs  ml-1 flex items-center'}>
      {({ isActive }) => (<><AccountCircleIcon sx={ICON_STYLE} className={isActive ? 'text-active' : 'text-[#999]'} />{value?.userInfo?value.userInfo.nickName : '登录'}</>)}
    </NavLink>
  }
  return (
    <header className='w-80 bg-black min-h-screen flex-shrink-0'>
      <div className='flex items-center justify-between px-8 py-2'>
        <h1 className='text-2xl font-bold text-[#fff]'>Musik</h1>
        <SearchIcon sx={{ fontSize: 25 }} className='text-gray-light' />
      </div>
      <section className='px-8 py-2'>
        <div id='user-info' className='border-y border-[hsla(0,0%,84.7%,.13)]'>
          <div className='flex items-center cursor-pointer px-2 py-4 justify-between'>
            <LoginAvatar />
            {value?.userInfo ? <span className='text-[#999] hover:text-active' onClick={logout}>登出</span> : ''}
          </div>
        </div>
        <div id='user-menu' className='mt-10'>
          <Nav navList={links} />
        </div>
      </section>
    </header>
  )
}
export default Sidebar

type NavLinkType = {
  path: string
  ActiveIcon: JSX.Element
  NavIcon: JSX.Element
  name: string
}

const Nav = ({ navList }: { navList: NavLinkType[] }) => {
  return (
    <ul>
      {navList.map(({ path, ActiveIcon, NavIcon, name }: NavLinkType) => {
        return <li className='px-2 py-3' key={path}>
          <NavLink to={`${path}`}>
            {({ isActive }: { isActive: boolean }) => (<ActiveNav icon={NavIcon} activeIcon={ActiveIcon} name={name} isActive={isActive} />)}
          </NavLink>
        </li>
      })}
    </ul>
  )
}

const ActiveNav = ({ icon, activeIcon, isActive, name }: { icon: JSX.Element, activeIcon: JSX.Element, name: string, isActive: boolean }) => {
  return <>
    {isActive ? activeIcon : icon}
    <span className={`text-base max-w-xs ml-1 align-bottom ${isActive ? 'text-active' : 'text-[#999]'}`}>{name}</span>
  </>
}
