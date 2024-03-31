import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
// import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    // to know whether device is mobile or not 
    const isNonMobile = useMediaQuery('(min-width: 960px)');

    // to check whether sidebar is open or not 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Box
    sx={{
        minHeight: '100vh',
    }}
    >
        {/* <Sidebar /> */}
        <Box>
            <Navbar
            isSidebarOpen={isSidebarOpen}
            isNonMobile={isNonMobile}
            setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet />
        </Box>
      
    </Box>
  )
}

export default RootLayout
