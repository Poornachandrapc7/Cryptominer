import React from 'react';
import { Snackbar } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = () => {
    const { alert, setAlert } = CryptoState();

    const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setAlert({ open: false });
      };
    

  return (
    <Snackbar
    open={alert.open}
    autoHideDuration={3000}
    onClose={handleCloseAlert}
    >
        <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {/* display this message  */}
        {alert.message}  
      </MuiAlert>

    </Snackbar>
    
  )
}

export default Alert