import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    // to know whether device is mobile or not 
    const isNonMobile = useMediaQuery('(min-width: 960px)');

    // to check whether sidebar is open or not 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Box
    >
        <Sidebar
        isSidebarOpen={isSidebarOpen}
        isNonMobile={isNonMobile}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box
        sx={{
          minHeight: '100vh',
          marginLeft: isNonMobile ? '270px': 'inherite',
        }}
        onClick={()=>{
          if(isSidebarOpen) setIsSidebarOpen(!isSidebarOpen);
        }}
        flexGrow={1}>
            <Navbar
            isSidebarOpen={isSidebarOpen}
            isNonMobile={isNonMobile}
            setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box
            sx={{
              marginRight: isNonMobile ? '80px': 'inherite',
            }}
            >
            <Outlet />

            </Box>
        </Box>
      
    </Box>
  )
}

export default RootLayout
