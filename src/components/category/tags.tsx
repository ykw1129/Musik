import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getHotTags } from '../../api/resource/get';
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
      <div className='after:clear-both after:block'>
          <ul>
              {tags?.map((tag: Tag) =>
                  <li className='w-1/3 pr-4 pb-3 float-left' key={tag.id}>
                      <Link className='h-16 rounded px-3 bg-tag block hover:bg-seconds' to={`/category/playlist/${tag.id}`}>
                          <span className='block truncate leading-[4rem] text-center'>{tag.name}</span>
                      </Link>
                  </li>
              ) || ''}
          </ul>
      </div>
  )
}

export default Tags