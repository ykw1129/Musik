import React from 'react'


const Heading =({title}:{title:string}) => {
  return (
    <header className='border-b border-b-gray pb-10'>
      <h1 className='text-4xl text-gray font-bold'>{title}</h1>
    </header>
  )
}

export default Heading