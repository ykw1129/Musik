import React, { ChangeEvent, Dispatch, useRef, useState } from 'react'
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
import { getUserInfo, updateUserInfo, deleteUser, getFile } from '../../api/server/user';

function UserManage() {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    const [users, setUsers] = useState<User[] | null>()
    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: '标题',
            flex: 1
        },
        {
            field: 'url',
            headerName: '链接',
            flex: 1
        },
        {
            field: 'createTime',
            headerName: '注册时间',
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
    const fetchData = (title?: string) => {
        setLoading(true)
        getFile({ title, pageSize: 10 }).then(data => {
            if (data.code === 0) {
                setUsers(data.data.list)
            } else {
                toast.success('获取用户列表失败')
            }
            setLoading(false)
        })
    }
    const onDelete = (id: string) => {
        return () => {
            deleteUser({ id }).then(data => {
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
                <AdminHeader name='文件' />
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
            </div>
        </section>
    )
}

export default UserManage