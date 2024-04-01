import {
  Avatar,
  Box,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";
import { AccountBalance, ChevronLeft } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

function Sidebar(props) {
  const { isSidebarOpen, isNonMobile, setIsSidebarOpen } = props;

  // to use theme
  const theme = useTheme();

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
          width: "300px",
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
        <Avatar size="lg" src={AccountBalance} />
        <Box>
          <Typography variant="h5" sx={{fontWeight: '700'}}>Username</Typography>
          <Typography variant="h6">joined 20 Jun 2023</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
