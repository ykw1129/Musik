import React from 'react'
import { Link } from 'react-router-dom'
type LinkType = {
  name: string,
  path: string
}
const links: LinkType[] = [
  { name: '服务条款', path: '/' },
  { name: '联系我们', path: '/' },
  { name: '友情链接', path: '/' },
]
type Props = {}

function Index({ }: Props) {
  return (
    <footer className='bg-background mt-auto w-full'>
      <div className='flex flex-row box-border px-10 py-5 justify-between items-center'>
        <small>©<b>Musik Corporation</b></small>
        <ul className='flex'>
          {links.map((link: LinkType) =>
            <li key={link.name} className='ml-3'>
              <Link key={link.name} to={link.path}  >
                <span className='text-xs'>{link.name}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}

export default Index