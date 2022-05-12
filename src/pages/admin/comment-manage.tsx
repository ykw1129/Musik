import { GridColDef } from '@mui/x-data-grid';
import React from 'react'
import { StyledDataGrid } from './index';
import AdminHeader from '../../components/admin-header'
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex:1 },
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'id', headerName: 'ID', flex: 1 },
];
const rows = [
    { id:1 }
]
const CommentManage = () => {
  return (
      <section className='lg:w-[1200px] m-auto'>
          <div className='pt-20'>
              <AdminHeader name='评论' />
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

export default CommentManage