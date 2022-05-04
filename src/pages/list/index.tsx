import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

function Index({}: Props) {
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])

  return (
    <div></div>
  )
}

export default Index