import { Box } from '@mui/system'
import React from 'react'
import logo from '../asset/Agrilogo.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  
const Welcome = () => {


    return (
        <div>
            <Box sx={{
                padding: '100px 0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <img src={logo} height={'200px'} width={"200px"} alt="" />
                <h1 style={{ paddingTop: '10px' }}>Welcome to Agri-Medico, Your AI Doctor...</h1>

                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{marginTop:'70px'}}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button>
            </Box>
        </div>
    )
}

export default Welcome