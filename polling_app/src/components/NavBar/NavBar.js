import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Polling App
          </Typography>
          <Link to="/">
            <Button color="inherit" sx={{color: '#fafafa'}} >Home</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit" sx={{color: '#fafafa'}} >LogIn</Button>
          </Link>
          <Link to="/signup">
            <Button color="inherit" sx={{color: '#fafafa'}} >SignUp</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}