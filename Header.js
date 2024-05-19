import { AppBar, Container,MenuItem,Select,ThemeProvider,Toolbar, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles, createTheme} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';

const useStyles = makeStyles((theme) => ({
    try:{
      flex: 1,
      display: "flex",
      flexDirection: "row",

    },
    title: {
      flex: 1,
      // display: "flex",
      color: "#FAF5EF",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
      //flexDirection: "row",
    },
  }));

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate(); 
    const { currency, setCurrency,user} = CryptoState();
    console.log(currency);
    
  return (
    <ThemeProvider theme={darkTheme}>
     <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar className={classes.try}>
              <Typography onClick={()=> navigate(-1)} className={classes.title}>
                  CryptoMiner
              </Typography>
              <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 900 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            
            {user? <UserSidebar/> : <AuthModal />}
            {/* <AuthModal /> */}
            </Toolbar>
            
            
        </Container>
     </AppBar>
    </ThemeProvider>
  )
}

export default Header