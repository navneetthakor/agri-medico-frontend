import React, { useEffect, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FlexCenter from "./FlexCenter";
import "../css/loading.css";
import {
  Box,
  CircularProgress,
  Skeleton,
  circularProgressClasses,
} from "@mui/material";
import FlexBetween from "./FlexBetween";

function Loading() {
  const [currentColor, setCurrentColor] = useState("#d96570");
  const colors = ["#4285f4", "#9b72cb", "#d96570", "#F31314"];

  return (
    <Box
    sx={{
        position: 'relative',
        margin: '4vh 4vw 4vh 10vw'
    }}
    >
    <CircularProgress
    sx={{
        position: 'absolute',
        top: '30%',
        left: '50%'
    }}
    size={80} />
    
    <h1><u>Disease:</u></h1>
    <Box
    sx={{
        display: 'flex',
        justifyContent:'space-Between'
    }}
    >

        <Skeleton variant="rectangular" width={300} height={345} animation="wave" />
    </Box>

    <Box>
    <h1><u>Medicines:</u></h1>
    <Box
    display={'flex'}
    gap={'4vw'}
    marginTop={'4vh'}
    >
        <Skeleton variant="rectangular" width={300} height={345} animation="wave" />
        <Skeleton variant="rectangular" width={300} height={345} animation="wave" />
    </Box>
    </Box>
    </Box>
  );
}

export default Loading;
