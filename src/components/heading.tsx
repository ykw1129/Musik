import React from 'react'


const Heading =({title,side = 'left'}:{title:string|undefined,side?:'left'|'right'}) => {
  return (
    <header className='border-b border-b-line pb-10 mb-8'>
      <h1 className={`text-4xl text-${side}   font-bold`}>{title||'分类'}</h1>
    </header>
  )
}

export default Heading