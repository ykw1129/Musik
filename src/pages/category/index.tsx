import React from 'react'
import Tags from '../../components/category/tags'
import Heading from '../../components/heading'

type Props = {}

const Index = (props: Props) => {
  return (
    <section className='lg:w-[964px] m-auto'>
      <div className='pt-20'>
        <Heading title='分类' />
        <Tags />
      </div>
    </section>
  )
}

export default Index