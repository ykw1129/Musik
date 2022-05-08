import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getHotTags } from '../../api/resource/home';
import { useMount } from '../../hooks/index';
import { toast } from 'react-toastify';
import { Tag } from '../../api/resource/types';

type Props = {}

function Tags({}: Props) {
    const [tags,setTags] = useState<Tag[]|undefined>()
    const getTags = () =>{
        getHotTags().then(data=>{
            if(data.code!==200){
                toast.error('获取热门歌单标签失败')
            }else{
                setTags(data.tags)
            }
        })
    }
    useMount(getTags)
  return (
    <ul className='clear-both'>
        {tags?.map((tag:Tag)=>
            <li className='w-1/3 pr-4 pb-3 float-left' key={tag.id}>
                <Link className='h-16 rounded px-3' to={`/playlist/${tag.id}`}>
                    <span className='block truncate'>{tag.name}</span>
                </Link>
            </li>
        )||''}
    </ul>
  )
}

export default Tags