import { Button, TextField, ThemeProvider } from '@mui/material'
import { theme } from '../../theme'
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../../api/server/user';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { localSet } from '../../utils/localStorage';
const Index = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
  const onSubmit = (data: any) => {
    Login(data).then(res => {
      if (res.code === 0) {
        localSet('token',res.data.token)
        localSet('nickName',res.data.nickName)
        localSet('id',res.data.id)
        navigate('/')
        toast.success(res?.msg || '登录成功')
      } else {
        toast.error(res?.msg || '登录失败')
      }
    })
  }
  const rules = {
    email: register('email', { required: "邮箱是必填的", maxLength: { value: 30, message: '邮箱不能超过30个字符' } }),
    password: register('password', { required: "密码是必填的", maxLength: { value: 20, message: '密码不能超过20个字符' } }),
  }
  return (
    <>
      <div className='m-auto min-h-full'>
        <div className='w-[500px] m-auto min-h-full bg-[#fff]'>
          <form onSubmit={handleSubmit(onSubmit)} className='block items-center shadow-login py-20 px-10'>
            <h1 className='text-center text-4xl text-active font-bold mb-10'>Musik</h1>
            <ThemeProvider theme={theme}>
              <div className='mb-10'>
                <TextField  {...rules.email} helperText={errors.email?.message} color="secondary" fullWidth label="邮箱"  placeholder='E-mail' variant="standard" />
              </div>
              <div className='mb-10'>
                <TextField {...rules.password} helperText={errors.password?.message}  color="secondary" type="password"  fullWidth label="密码" placeholder='password' variant="standard" />
              </div>
              <div className='mb-5'>
                <Button type='submit' className='w-full' color='secondary' variant='outlined'>登录</Button>
              </div>
              <div className='w-full'>
                <Link to='/register' className='underline block rounded text-right h-9 leading-[2.5] text-seconds'>
                  <span className='text-sm'>没有账号?去注册</span>
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