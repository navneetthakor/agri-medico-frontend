import { Box } from '@mui/system'
import React from 'react'
import logo from '../asset/Agrilogo.png'
const Welcome = () => {
    return (
        <div>
            <Box sx={{
                padding: '100px 0px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
                
            }}>
                <img src={logo} height={'200px'} width={"200px"} alt="" />
                <h1>Welcome to Agri-Medico, your AI Doctor...OS OFOISD F9PUSDOIL</h1>
            </Box>
        </div>
    )
}

export default Welcome