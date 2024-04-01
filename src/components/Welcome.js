import { Box } from '@mui/system'
import React from 'react'
import logo from '../asset/Agrilogo.png'
const Welcome = () => {
    return (
        <div>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
                
            }}>
                <img src={logo} height={'100px'} width={"100px"} alt="" />
                <h1>Welcome to Agri-Medico, your AI Doctor...</h1>
            </Box>
        </div>
    )
}

export default Welcome