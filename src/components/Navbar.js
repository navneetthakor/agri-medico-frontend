import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ListIcon from "@mui/icons-material/List";
import { useTheme } from "@emotion/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../store/Mode";



function Navbar(props) {
  const { isSidebarOpen, isNonMobile, setIsSidebarOpen } = props;

  //   to access theme
  const theme = useTheme();

  //   accessing mode
  const mode = useSelector((state) => state.currMode.mode);
  const dispatch = useDispatch();
  // actually returning component
  return (
    <AppBar
      sx={{
        position: "sticky",
        backgroundColor: theme.palette.background.alt,
        top: 0,
        left: 0,
        padding: "0 3%",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* leftside button  */}
        <Box>
          {isSidebarOpen ? (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <ListIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuOpenIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          )}
        </Box>

        {/* senter logo  */}
        <Box
          sx={{
            // backgroundColor: "rgba(255,255,255,0.2)",
            background: 'linear-gradient(to bottom right, royalblue, pink)',
            backdropFilter: "blur(50px)",
            borderRadius: '8px',
            padding: " 5px 15px",
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            fontWeight: '700',
            textShadow: mode === 'dark' ? '2px 2px 15px black' : '2px 2px 15px white',
            gap: '5%'
          }}
        >
            <ScienceRoundedIcon />
          <Box sx={{fontSize: '18px'}}>Experimental</Box> 
        </Box>

        {/* right side button  */}
        <FlexBetween>
          {mode === "dark" ? (
            <IconButton onClick={() => dispatch(setMode())}>
              <DarkModeIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => dispatch(setMode())}>
              <LightModeIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          )}
          <IconButton
            sx={{ marginLeft: "5%" }}
          >
            <AccountCircleIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
