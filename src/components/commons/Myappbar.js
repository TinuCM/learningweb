import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from "react";
import Link from "next/link";
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { theme,darktheme } from '@/styles/mui/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode'; 
import { useTheme } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@/redux/reducers/themeReducer";
export default function Myappbar( props ) {  
  // const [currentTheme,setCurrentTheme] = useState("dark");
  // const theme=useTheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
  const theme = useTheme();
     return (
    <>
    {/* <ThemeProvider theme={currentTheme === "dark" ? darktheme : theme}> */}
      {/* <CssBaseline></CssBaseline> */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(toggleTheme())}
          >
           {  currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon/>}
          </IconButton>
          <Link href={"/blog"}>
            <Button sx={{color: theme.palette.icon.main}}>Login</Button>
          </Link>
        
          <Button sx={{color: theme.palette.icon.main}}>Login</Button>
        </Toolbar>
      </AppBar>
      
      </Box>
        {/* </ThemeProvider> */}
      </>
      
      );
 }
