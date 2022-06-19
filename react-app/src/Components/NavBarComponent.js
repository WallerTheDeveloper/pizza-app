import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

class NavBarComponent extends React.Component {

  render() {
    return (
      <Box sx={{ flexGrow: 1, marginBottom: 10, marginTop: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <Typography sx={{ mr: 10, fontStyle: "italic" }} variant="h6" component="div">
              Panucci Pizza
            </Typography>
            <Link href="/menu" className="btn btn-danger" color="#FFFFFF" underline="none" sx={{ mr: 5 }}>
              Home
            </Link>
            <Link href="/orders" className="btn btn-danger" color="#FFFFFF" underline="none" sx={{ mr: 5 }}>
              Your Cart
            </Link>
          </Toolbar>
        </AppBar>
      </Box >
    );
  }
}

export default NavBarComponent;
