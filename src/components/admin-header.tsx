import { AccountCircle } from '@mui/icons-material'
import { Box, Button, Divider, InputAdornment, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../theme'



function AdminHeader({name}: {name:string}) {
    return (
        <section>
            <ThemeProvider theme={theme}>
                <div className='flex flex-row justify-between items-center pb-10'>
                    <TextField color="secondary" label={`搜索${name}`} variant="standard" />
                    <Button variant="outlined" color="secondary">新增{name}</Button>
                </div>
            </ThemeProvider>
            <Divider />
        </section>
    )
}

export default AdminHeader