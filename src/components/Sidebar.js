import {
  Box,
  Button,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import FlexBetween from "./FlexBetween";
import { ChevronLeft } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Sidebar(props) {
  const { isSidebarOpen, isNonMobile, setIsSidebarOpen } = props;
  const [userHistory, setUserHistory] = useState([])
  // to use theme
  const theme = useTheme();

  // help button logic
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const handleHelpButtonClick = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
  };

  const getUserHistory = async () => {
    try {

      const history = await fetch('http://localhost:5001/userHistory/getUserHistory', {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "usertoken": localStorage.getItem("usertoken")
        }
      })
      const json = await history.json()
      console.log("history is : ", json)
      setUserHistory(json?.search_history.reverse() || [])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getUserHistory()
  }, [localStorage.getItem("usertoken"), userHistory])

  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          overflow: 'hidden',
          width: "270px",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.alt,
        },
      }}
      variant="persistent"
      anchor="left"
      open={isNonMobile ? true : isSidebarOpen}
    >
      {/* heading  */}
      <DialogTitle
        sx={{
          height: "10vh",
        }}
      >
        <FlexBetween>
          <Typography variant="h2" sx={{ fontWeight: "700" }}>
            Agri-Medico
          </Typography>
          {!isNonMobile && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <ChevronLeft sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
        </FlexBetween>
      </DialogTitle>

      {/* body  */}
      <Box
        className="scrollbarBody"
        sx={{
          height: "70vh",
          borderTop: "1px solid",
          borderColor: "divider",
          overflowY: "scroll",
          padding: 1.5,
        }}
      >
        <List>
          {userHistory?.map((iteam) => (
            <ListItem
              sx={{
                height: "8vh",
              }}
              key={iteam.search_date}
            >
              <ChatBubbleOutlineIcon />
              {/* <Typography marginLeft='10px' variant="h6">{iteam.search_date.substring(0,19)}</Typography> */}
              <Typography marginLeft='10px' variant="h6">Date: {iteam.search_date.substring(0,10)}<br/>Time: {iteam.search_date.substring(11,19)}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* footer  */}
      <Box
        sx={{
          height: "20vh",
          overflow: 'hidden',
          background: theme.palette.background.alt,
          display: "flex",
          gap: "5%",
          p: 1.5,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* hellp menu  */}
        <List>
          <ListItem>
            <HelpOutlineIcon />
            <Typography
              variant="h6"
              marginLeft='10px'
              sx={{ cursor: "pointer" }}
              onClick={handleHelpButtonClick}
            >
              Help
            </Typography>
          </ListItem>
          <Menu
            id="basic-menu"
            open={isHelpMenuOpen}
            onClose={handleHelpButtonClick}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() =>
                (window.location.href = "mailto:tnavneet8628@gmail.com")
              }
            >
              Email
            </MenuItem>
            <MenuItem onClick={handleHelpButtonClick}>My account</MenuItem>
            <MenuItem onClick={handleHelpButtonClick}>Logout</MenuItem>
          </Menu>

          <ListItem>
            <HistoryIcon />
            <Typography marginLeft='10px' variant="h6">Activity</Typography>
          </ListItem>
          <ListItem>
            <InfoIcon />
            <Typography marginLeft='10px' variant="h6">About Us</Typography>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
