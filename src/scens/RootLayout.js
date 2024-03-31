import { Box } from '@mui/material'
import React from 'react'
// import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <Box
    sx={{
        minHeight: '100vh',
    }}
    >
        {/* <Sidebar /> */}
        <Box>
            <Navbar/>
            <Outlet />
        </Box>
      
    </Box>
  )
}

export default RootLayout
