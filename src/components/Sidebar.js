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
import React, { useState } from "react";
import FlexBetween from "./FlexBetween";
import { ChevronLeft } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useHref } from "react-router-dom";

function Sidebar(props) {
  const { isSidebarOpen, isNonMobile, setIsSidebarOpen } = props;

  // to use theme
  const theme = useTheme();

  // help button logic 
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const handleHelpButtonClick = () =>{
    setIsHelpMenuOpen(!isHelpMenuOpen);
  }

  const hello = [
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ];

  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          width: "270px",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.alt,
        },
      }}
      variant="persistent"
      anchor="left"
      open={ isNonMobile ? 'open' : isSidebarOpen}
    >
      {/* heading  */}
      <DialogTitle
        sx={{
          height: "10vh",
        }}
      >
        <FlexBetween>
          <Typography variant="h2" sx={{fontWeight: '700'}}>Agri-Medico</Typography>
         {!isNonMobile && <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <ChevronLeft sx={{ fontSize: "25px" }} />
          </IconButton> }
        </FlexBetween>
      </DialogTitle>

      {/* body  */}
      <Box
      className='scrollbarBody'
        sx={{
          height: "89vh",
          borderTop: "1px solid",
          borderColor: "divider",
          overflowY: "scroll",
          padding: "auto 10px",
        }}
      >
        <List>
          {hello?.map((iteam) => (
            <ListItem
              sx={{
                height: "5vh",
              }}
            >
              {iteam}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* footer  */}
      <Box
        sx={{
          height: "10vh",
          background: theme.palette.background.alt,
          display: "flex",
          gap: "5%",
          p: 1.5,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button onClick={handleHelpButtonClick}>Help</Button>
        <Menu
        id="basic-menu"
        open={isHelpMenuOpen}
        onClose={handleHelpButtonClick}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => (window.location.href = 'mailto:tnavneet8628@gmail.com')}>Email</MenuItem>
        <MenuItem onClick={handleHelpButtonClick}>My account</MenuItem>
        <MenuItem onClick={handleHelpButtonClick}>Logout</MenuItem>
      </Menu>
        
      </Box>
    </Drawer>
  );
}

export default Sidebar;
