import React from 'react'
import AdminHeader from '../../components/admin-header'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import dayjs from 'dayjs';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { StyledDataGrid } from './index';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'email', headerName: '邮箱', flex: 1 },
  {
    field: 'status',
    headerName: '状态',
    valueGetter: (params) => params.row.status === 1 ? '启用' : '禁用', flex: 1
  },
  {
    field: 'updateTime',
    headerName: '更新时间',
    valueGetter: (params) =>
      dayjs(params.row.updateTime).format('YYYY-MM-DD'), flex: 1
  },
  {
    field: 'action',
    headerName: '操作',
    flex: 1,
    renderCell: (params) =>
      <>
        <Button style={{ marginRight: '10px' }} color='success' variant='outlined' startIcon={<EditIcon />}>编辑</Button>
        <Button color='error' variant='outlined' startIcon={<RemoveCircleIcon />}>删除</Button>
      </>

  }
];

const rows = [
  { id: 1, email: '123@123.com', status: 1 },
  { id: 2, email: '1234@123.com', status: 1 },
  { id: 3, email: '12345@123.com', status: 0 },
  { id: 4, email: '12346@123.com', status: 0 },
  { id: 5, email: '12325@123.com', status: 0 },
  { id: 6, email: '12145@123.com', status: 0 },
  { id: 7, email: '12245@123.com', status: 0 },
];
function UserManage() {
  return (
    <section className='lg:w-[1200px] m-auto'>
      <div className='pt-20'>
        <AdminHeader name='用户' />
        <div className='mt-10'>
          <StyledDataGrid

            autoHeight
            rows={rows}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick={true}
          />
        </div>
      </div>
    </section>
  )
}

export default UserManage