import {BrowserRouter, Route, Routes} from 'react-router-dom'; //to create different pages in react
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from "@material-ui/core";
import Alert from './components/Alert';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
})); 

function App() {

  
  
  
  const classes = useStyles();

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path = "/" exact element={ <Homepage/> }/>
      <Route path = "/coins/:id" exact element={ <CoinPage/> }/>
      </Routes>
      
    </div>
    <Alert/>
    </BrowserRouter>
  );
}

export default App;
