import React, { ChangeEvent, Dispatch, useRef, useState } from 'react'
import AdminHeader from '../../components/admin-header'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import dayjs from 'dayjs';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup, TextareaAutosize, TextField, ThemeProvider } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { StyledDataGrid } from './index';
import { DynamicType } from '../../api/server/types';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { theme } from '../../theme';
import { getUserInfo, updateUserInfo, deleteUser, getDynamic, deleteDynamic } from '../../api/server/user';

function UserManage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [dynamics, setDynamics] = useState<DynamicType[] | null>()
  const columns: GridColDef[] = [
    {
      field: 'email',
      headerName: '邮箱',
      flex: 1
    },
    {
      field: 'content',
      headerName: '内容',
      flex: 1
    },
    {
      field: 'like',
      headerName: '点赞次数',
      flex:1
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
          <Button color='error' variant='outlined' onClick={onDelete(params.row._id)} startIcon={<RemoveCircleIcon />}>删除</Button>
        </>

    }
  ];
  const fetchData = (email?: string) => {
    setLoading(true)
    getDynamic({ email, pageSize: 10 }).then(data => {
      if (data.code === 0) {
        // toast.success('获取动态列表成功')
        setDynamics(data.data.list)
      } else {
        toast.error('获取动态列表失败')
      }
      setLoading(false)
    })
  }
  const onDelete = (id: string) => {
    return () => {
      deleteDynamic({ id }).then(data => {
        if (data.code === 0) {
          toast.success('删除成功')
          fetchData()
        } else {
          toast.error('删除失败')
        }
      })
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='w-full px-10 m-auto'>
      <div className='pt-20'>
        <AdminHeader name='动态' />
        <div className='my-10'>
          <StyledDataGrid
            loading={loading}
            getRowId={row => row._id}
            autoHeight
            pageSize={10}
            rows={dynamics || []}
            rowsPerPageOptions={[10]}
            columns={columns}
            disableSelectionOnClick={true}
          />
        </div>
        <div className='flex justify-center'>
          <Pagination count={10} />
        </div>
      </div>
    </section>
  )
}

export default UserManage