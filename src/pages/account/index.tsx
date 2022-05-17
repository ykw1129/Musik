import React, { useEffect, useState } from 'react'
import { User } from '../../api/server/types'
import { getUserInfo } from '../../api/server/user'
import avatar from '../../assets/images/avatar.jpg'
import { localGet } from '../../utils/localStorage'
type Props = {}

const Index = (props: Props) => {
  const [userInfo,setUserInfo] = useState<User|null>()
  useEffect(() => {
    const fetchData = () =>{
        getUserInfo({id:})
        .then(data=>console.log(data))
    }
    fetchData()
  }, [])
  return (
    <div className='w-full flex'>
      <header className='w-full h-96 bg-user-background bg-cover bg-center flex items-end justify-center'>
        <div className='flex items-center w-40 h-40 rounded-full overflow-hidden'>
          <img className='w-full h-full' src={avatar} alt='alt' />
        </div>
        <h1></h1>
      </header>
    </div>
  )
}

export default Index