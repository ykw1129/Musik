import React, { Dispatch, useState } from 'react'
import AdminHeader from '../../components/admin-header'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import dayjs from 'dayjs';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup, TextField, ThemeProvider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { StyledDataGrid } from './index';
import { User } from '../../api/server/types';
import { useEffect } from 'react';
import { getUser } from '../../api/server/admin';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { theme } from '../../theme';
import { getUserInfo, updateUserInfo } from '../../api/server/user';

function UserManage() {
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [id, setId] = useState<string>('')
  const [users, setUsers] = useState<User[] | null>()
  const columns: GridColDef[] = [
    {
      field: 'email',
      headerName: '邮箱',
      flex: 1
    },
    {
      field: 'nickName',
      headerName: '用户名',
      flex: 1
    },
    {
      field: 'status',
      headerName: '状态',
      valueFormatter: (params) => params.value === 1 ? '启用' : '禁用', flex: 1
    },
    {
      field: 'registerTime',
      headerName: '注册时间',
      valueFormatter: (params) => dayjs(params.value).format('YYYY-MM-DD hh:mm:ss'),
      flex: 1
    },
    {
      field: 'updateTime',
      headerName: '更新时间',
      valueFormatter: (params) => dayjs(params.value).format('YYYY-MM-DD hh:mm:ss'),
      flex: 1
    },
    {
      field: 'action',
      headerName: '操作',
      flex: 1,
      renderCell: (params) =>
        <>
          <Button style={{ marginRight: '10px' }} color='info' variant='outlined' onClick={onEdit(params.row._id)} startIcon={<EditIcon />}>编辑</Button>
          <Button color='error' variant='outlined' startIcon={<RemoveCircleIcon />}>删除</Button>
        </>

    }
  ];
  const onEdit = (id: string) => {
    return () => {
      setId(id)
      setOpen(true)
    }
  }
  const fetchData = (nickName?: string) => {
    setLoading(true)
    getUser({ nickName, pageSize: 10 }).then(data => {
      if (data.code !== 0) {
        toast.success('获取用户列表失败')
      } else {
        setUsers(data.data.list)
      }
      setLoading(false)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='w-full px-10 m-auto'>
      <div className='pt-20'>
        <AdminHeader name='用户' />
        <div className='my-10'>
          <StyledDataGrid
            loading={loading}
            getRowId={row => row._id}
            autoHeight
            pageSize={10}
            rows={users || []}
            rowsPerPageOptions={[10]}
            columns={columns}
            disableSelectionOnClick={true}
          />
        </div>
        <div className='flex justify-center'>
          <Pagination count={10} />
        </div>
        <UserDialog fetch={fetchData} id={id} open={open} close={() => setOpen(false)} />
      </div>
    </section>
  )
}

export default UserManage

const UserDialog = ({ open, close, id, fetch }: { open: boolean, close: () => void, id: string, fetch: () => void }) => {
  const [defaultData, setDefaultData] = useState<User | null>()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const handleClose = () => {
    close()
  }
  const onSubmit = (data: any) => {
    updateUserInfo(data).then(res => {
      if (res.code === 0) {
        close()
        fetch()
      }
    })
  }
  const rules = {
    nickName: register('nickName', { required: "用户是必填的", maxLength: { value: 30, message: '邮箱不能超过30个字符' } }),
    status: register('status', { required: "状态是必填的" }),
    id: register('id')
  }
  useEffect(() => {
    if (open) {
      getUserInfo({ id }).then((data) => {
        setDefaultData(data.data[0])
        setValue('id', id)
      })
    }
  }, [id, open, setValue])
  return <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{defaultData?.email}</DialogTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ThemeProvider theme={theme}>
        <DialogContent>
          <div className='w-[500px]'>
            <div className='mb-10'>
              <TextField  {...rules.nickName} defaultValue={defaultData?.nickName} helperText={errors.nickName?.message} color="secondary" fullWidth label="用户名" placeholder='E-mail' variant="standard" />
            </div>
            <div className='mb-10'>
              <input type="hidden" {...rules.id} defaultValue={id} />
              <FormLabel id="demo-row-radio-buttons-group-label">状态</FormLabel>
              <RadioGroup
                row
                {...rules.status}
                defaultValue={defaultData?.status}
                aria-labelledby="demo-row-radio-buttons-grou  p-label"
                name="radio-buttons-group"
              >
                <FormControlLabel value={1} control={<Radio sx={{
                  color: '#0ad269',
                  '&.Mui-checked': {
                    color: '#0ad269',
                  },
                }} />} label="启用" />
                <FormControlLabel value={0} control={<Radio sx={{
                  color: '#0ad269',
                  '&.Mui-checked': {
                    color: '#0ad269',
                  },
                }} />} label="禁用" />
              </RadioGroup>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color='secondary' onClick={handleClose}>取消</Button>
          <Button type='submit' color='secondary'>提交</Button>
        </DialogActions>
      </ThemeProvider>
    </form>
  </Dialog>
}