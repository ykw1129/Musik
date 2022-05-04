import { Button, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import { Link } from 'react-router-dom';

type Props = {}

const Index = ({ }: Props) => {
  return (
    <>
      <div className='m-auto min-h-full'>
        <div className='w-[500px] m-auto min-h-full bg-[#fff]'>
          <div className='items-center shadow-login py-20 px-10'>
            <h1 className='text-center text-4xl text-active font-bold mb-10'>Musik</h1>
            <ThemeProvider theme={theme}>
              <div className='mb-10'>
                <TextField color="secondary" fullWidth label="邮箱" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField color="secondary" fullWidth label="密码" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField color="secondary" fullWidth label="再次输入密码" variant="standard" />
              </div>
              <div className='mb-5'>
                <Button className='w-full' color='secondary' variant='outlined'>注册</Button>
              </div>
              <div className='w-full'>
                <Link to='/login' className='underline block rounded text-right h-9 leading-[2.5] text-seconds'>
                  <span className='text-sm'>已有账号?去登录</span>
                </Link>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index