import { AppBar } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <AppBar
    sx={{
        border:'2px solid red',
        position: 'sticky',
        top: 0,
        left: 0,
    }}
    >
      Navbar
    </AppBar>
  )
}

export default Navbar
