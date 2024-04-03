import { Box } from '@mui/system'
import React, { useState, useContext, useEffect } from 'react'
import logo from '../asset/Agrilogo.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import fetchContext from '../context/fetch/fetchContext';
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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

    const context = useContext(fetchContext);
    const { result, updateResult } = context;
    const navigate = useNavigate();

    const handleImageSubmit = async (event) => {
        const file = event.target.files[0];
        console.log("file is : ", file);
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch(`http://localhost:5001/flask/fetchdiseasename`, {
            method: "POST",
            mode: "cors",
            body: formData
        });
        const json = await response.json();
        updateResult(json);
        navigate('/result');
    }


    // made just for checking context variable result value
    useEffect(() => {
        console.log("result is : ", result);
    }, [])



    return (
        <div>
            <Box sx={{
                paddingTop: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={logo} height={'100px'} width={"100px"} alt="Logo" style={{ marginTop: '-10vh' }} />
                <h1 style={{ marginLeft: '5vw', marginTop: '-1vh', fontSize: '3rem', color: 'transparent', background: 'linear-gradient(45deg, #4285f4, #9b72cb, #9b72cb, #d96570, #131314)', backgroundClip: 'text', WebkitBackgroundClip: 'text', }}>Welcome to Agri-Medico,</h1>
                <h2 style={{ marginTop: '-4vh', marginLeft: '5vw', fontSize: '3rem', color: '#666666' }}>Your AI Doctor...</h2>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Card sx={{ maxWidth: 245, borderRadius:'10px', marginLeft:'80px', marginRight:'4px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Step-1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Upload a clear leaf image with the help of upload file button. Make sure to involve that part of leaf image which consists of the  affected region for accurate predictions. 
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ maxWidth: 245, borderRadius:'10px', marginLeft:'4px', marginRight:'4px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Step-2
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Obtain the disease information and guidelines regarding appropriate medicines. Lighten your task of finding those medicines by directly navigating to the links we provide.
                        </Typography>
                    </CardContent>
                </Card>


                <Card sx={{ maxWidth: 245, borderRadius:'10px', marginLeft:'4px', marginRight:'4px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Step-3
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Take control of viewing your past queries with our feature to see the past response. You can also delete your history as per your wish. Feel free to contact us anytime! 
                        </Typography>
                    </CardContent>
                </Card>
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