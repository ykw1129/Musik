import React from 'react'


const Heading =({title}:{title:string}) => {
  return (
    <header className='border-b border-b-line pb-10 mb-8'>
      <h1 className='text-4xl  font-bold'>{title}</h1>
    </header>
  )
}

export default Heading