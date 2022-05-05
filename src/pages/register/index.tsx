import { Button, TextField, ThemeProvider } from '@mui/material'
import React, { FormEvent } from 'react'
import { theme } from '../../theme'
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Register } from '../../api/server/user';

const Index = () => {
  const handleSubmit =  (evt: FormEvent<HTMLFormElement> | any) => {
    evt.preventDefault()
    let nickName = evt.target.querySelector('[name=nickName]').value
    let email = evt.target.querySelector('[name=email]').value
    let password = evt.target.querySelector('[name=password]').value
    let password_confirm = evt.target.querySelector('[name=password_confirm]').value
    if(password.trim()===password_confirm.trim()){
      Register({ nickName, email, password })
      .then(res => null)
      .catch(err=>toast(err.message))
    }else{
      toast.warn('两次密码不一致')
    }
  }
  return (
    <>
      <div className='m-auto min-h-full'>
        <div className='w-[500px] m-auto min-h-full bg-[#fff]'>
          <form onSubmit={handleSubmit} className='items-center shadow-login py-20 px-10'>
            <h1 className='text-center text-4xl text-active font-bold mb-10'>Musik</h1>
            <ThemeProvider theme={theme}>
              <div className='mb-10'>
                <TextField type='text' required name='nickName' placeholder='Nick Name' color="secondary" fullWidth label="用户名" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField type='email' required name='email' placeholder='E-mail' color="secondary" fullWidth label="邮箱" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField type='password' required name='password' placeholder='Password' color="secondary" fullWidth label="密码" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField type='password' required name='password_confirm' placeholder='Password again' color="secondary" fullWidth label="再次输入密码" variant="standard" />
              </div>
              <div className='mb-5'>
                <Button type='submit' className='w-full' color='secondary' variant='outlined'>注册</Button>
              </div>
              <div className='w-full'>
                <Link to='/login' className='underline block rounded text-right h-9 leading-[2.5] text-seconds'>
                  <span className='text-sm'>已有账号?去登录</span>
                </Link>
              </div>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </>
  )
}

export default Index