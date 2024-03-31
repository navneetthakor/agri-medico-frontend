
// material ui setup 
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import RootLayout from "./scens/RootLayout";


// router setup 



function App() {
  // setting up theme 
  const mode = useSelector((state) => state.currMode.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);

  // settingup the router 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route exact path="/" element={<RootLayout/>}>

    </Route>
  ))
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
}

export default App;
