import React from 'react'
import Heading from '../../components/heading'

type Props = {}

function PlayList({}: Props) {
  return (
      <section className='lg:w-[964px] m-auto'>
        <Heading title='分类' side='right' />
      </section>
  )
}

export default PlayList