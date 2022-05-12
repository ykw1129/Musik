import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import CommentIcon from '@mui/icons-material/Comment';
import { NavLink } from 'react-router-dom';
const ICON_STYLE = {
    fontSize: 24, marginRight: '10px'
}
const links: NavLinkType[] = [
    {
        path: '/user',
        ActiveIcon: (<PersonIcon sx={ICON_STYLE} className='text-active' />),
        NavIcon: (<PersonOutlineIcon sx={ICON_STYLE} className='text-[#999]' />),
        name: '用户管理'
    },
    {
        path: '/dynamic',
        ActiveIcon: (<EventNoteIcon sx={ICON_STYLE} className='text-active' />),
        NavIcon: (<EventNoteIcon sx={ICON_STYLE} className='text-[#999]' />),
        name: '动态管理'
    },
    {
        path: '/file',
        ActiveIcon: (<AudioFileIcon sx={ICON_STYLE} className='text-active' />),
        NavIcon: (<AudioFileIcon sx={ICON_STYLE} className='text-[#999]' />),
        name: '文件管理'
    },
    {
        path: '/comment',
        ActiveIcon: (<CommentIcon sx={ICON_STYLE} className='text-active' />),
        NavIcon: (<CommentIcon sx={ICON_STYLE} className='text-[#999]' />),
        name: '评论管理'
    },
]
export default function IconMenu() {
    return (
        <header className='w-80 bg-black min-h-screen flex-shrink-0'>
            <div className='flex items-center justify-between px-8 py-2 '>
                <h1 className='text-2xl font-bold text-[#fff]'>Musik</h1>
            </div>
            <section className='px-8 py-2'>
                <div id='user-menu' className='mt-10'>
                        <Nav navList={links} />
                </div>
            </section>
        </header>

    );
}

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
                return <li className='px-2 py-4' key={path}>
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