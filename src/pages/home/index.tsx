import React from 'react'
import Banner from '../../components/banner'
import Recommend from '../../components/recommend'

const index = () => {
  return (
    <>
      <section className='bg-banner py-10 w-full'>
        <div className='lg:w-[1000px] m-t-10 py-10 m-auto'>
          <Banner />
        </div>
      </section>
      <section className='m-t-10'>
        <div className='lg:w-[1000px] m-t-10 py-10 m-auto'>
          <Recommend />
        </div>
      </section>
    </>
  )
}

export default index