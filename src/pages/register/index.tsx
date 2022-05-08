import { Button, TextField, ThemeProvider } from '@mui/material'
import React, { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react'
import { theme } from '../../theme'
import { useContext } from 'react';
import { Store } from '../../context/auth-context';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Register } from '../../api/server/user';
import { useForm } from "react-hook-form";
import { localSet } from '../../utils/localStorage';

const Index = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors } = useForm();
  const onSubmit = (data: any) => {
    delete data.password_confirm
    Register(data).then(data => {
      if (data.code === 0) {
        navigate('/login')
        toast.success(data?.msg || '注册成功')
      } else {
        toast.error(data?.msg || '注册失败')
      }
    })
  }
  const rules = {
    nickName: register('nickName', { required: "用户名是必填的", maxLength: { value: 20, message: '用户名不能超过20个字符' } }),
    email: register('email', { required: "邮箱是必填的", maxLength: { value: 30, message: '邮箱不能超过30个字符' } }),
    password: register('password', { required: "密码是必填的", maxLength: { value: 20, message: '密码不能超过20个字符' } }),
    passwordConfirm: register('password_confirm', { required: "确认密码是必填的", maxLength: { value: 20, message: '确认密码不能超过20个字符' }, }),
  }
  const handleConfirmChange = (name: string) => {
    return (evt: ChangeEvent<HTMLInputElement>) => {
      if (evt.target.value.trim() !== watch(name).trim()) {
        setError("password_confirm", { type: "confirm", message: '两次密码不相同' })
      } else {
        clearErrors('password_confirm')
      }
    }
  }
  return (
    <>
      <div className='m-auto min-h-full'>
        <div className='w-[500px] m-auto min-h-full bg-[#fff]'>
          <form onSubmit={handleSubmit(onSubmit)} className='items-center shadow-login py-20 px-10'>
            <h1 className='text-center text-4xl text-active font-bold mb-10'>Musik</h1>
            <ThemeProvider theme={theme}>
              <div className='mb-10'>
                <TextField type='text' helperText={errors.nickName?.message}  {...rules.nickName} name='nickName' placeholder='Nick Name' color="secondary" fullWidth label="用户名" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField type='email' helperText={errors.email?.message}  {...rules.email} name='email' placeholder='E-mail' color="secondary" fullWidth label="邮箱" variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField type='password' helperText={errors.password?.message}   {...rules.password} name='password' placeholder='Password' color="secondary" fullWidth label="密码" variant="standard" onChange={handleConfirmChange('password_confirm')} />
              </div>
              <div className='mb-10'>
                <TextField type='password' helperText={errors.password_confirm?.message}   {...rules.passwordConfirm} name='password_confirm' placeholder='Password again' color="secondary" fullWidth label="再次输入密码" variant="standard" onChange={handleConfirmChange('password')} />
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