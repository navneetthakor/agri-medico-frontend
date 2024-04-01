import { Box } from '@mui/system'
import React, { useState } from 'react'
import logo from '../asset/Agrilogo.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Alert from '@mui/material/Alert';

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


    const handleImageSubmit = async (event) => {
        const file = event.target.files[0]
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch(`http://localhost:5001/flask/fetchdiseasename`, {
            method: "POST",
            mode: "cors",
            body: formData
        });
        const json = await response.json();
        console.log(json);
    }


    return (
        <div>
            <Box sx={{
                padding: '100px 0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={logo} height={'100px'} width={"100px"} alt="Logo" style={{marginTop:'-10vh'}} />
                <h1 style={{ paddingTop: '10px', fontSize:'52px', color:'transparent', background: 'linear-gradient(45deg, #4285f4, #9b72cb, #9b72cb, #d96570, #131314)', backgroundClip: 'text' }}>Welcome to Agri-Medico,</h1>
                <h2 style={{ marginTop:'-6vh', marginLeft: '-17vw', fontSize:'48px', color:'#7a7f9d'}}>Your AI Doctor...</h2>
            </Box>
            <Box sx={{
                padding: '100px 0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-7vh'

            }}>
                <Button
                    component="label"
                    variant="contained"
                    tabIndex={0}
                    startIcon={<CloudUploadIcon />}
                    type="submit"
                    onChange={handleImageSubmit}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button>

            </Box>
        </div>
    )
}

export default Welcome