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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Sidebar(props) {
  const { isSidebarOpen, isNonMobile, setIsSidebarOpen } = props;

  // to use theme
  const theme = useTheme();

  // help button logic
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const handleHelpButtonClick = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
  };

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
          overflow: 'hidden',
          width: "270px",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.default,
        },
      }}
      variant="persistent"
      anchor="left"
      open={isNonMobile ? "open" : isSidebarOpen}
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
          {hello?.map((iteam) => (
            <ListItem
              sx={{
                height: "5vh",
              }}
            >
              <ChatBubbleOutlineIcon />
              <Typography marginLeft='10px' variant="h6">{iteam}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* footer  */}
      <Box
        sx={{
          height: "20vh",
          overflow: 'hidden',
          background: theme.palette.background.default,
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
