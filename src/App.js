
// material ui setup 
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Sample from "./components/Sample";
import { CssBaseline } from "@mui/material";


// router setup 



function App() {
  // setting up theme 
  const mode = useSelector((state) => state.currMode.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);

  // settingup the router 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route exact path="/" element={<Sample/>}>

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
