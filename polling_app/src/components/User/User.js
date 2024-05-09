import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom';

export default function User() {

    return (
        <Container component="main" maxWidth="xs">
        <Box sx={{
            p: 2,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderBottom: '1px solid #1A76D2'
          }}>
            <Link to='/createPoll'>
                <Button variant="outlined">Create Poll</Button>
            </Link>   
        </Box>
    </Container>
    );
}