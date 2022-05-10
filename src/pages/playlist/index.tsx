import React from 'react'
import Heading from '../../components/heading'
import List from './list'
import { useParams } from 'react-router-dom';

function Index() {
  const {name} = useParams()
  return (
      <section className='lg:w-[964px] m-auto'>
        <div className='pt-20'>
          <Heading title={name} />
          <List cat={name} />
        </div>
      </section>
  )
}

export default Index