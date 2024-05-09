import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Poll() {
    return (
        <Container >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Typography component="h1" variant="h4">
            Name of the poll
          </Typography>
          <Box sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5" sx={{marginTop: 3}}>
            Question
          </Typography>
          <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{textAlign: 'center'}}>Answers</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={value}
                        // onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Box sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-evenly',
            flexGrow: 1 
          }}>
                    <Box sx={{marginRight: 3}}>
                    <Typography component="h1" variant="h2" sx={{color: "#51BC51"}}>
                        50%
                    </Typography>
                    <Typography component="h5" variant="h5" sx={{color: "#9FA6AD"}}>
                        answered yes: 5
                    </Typography>
                    </Box>
                    <Box sx={{marginLeft: 3}}>
                    <Typography component="h1" variant="h2" sx={{color: "#E47474"}}>
                        50%
                    </Typography>
                    <Typography component="h5" variant="h5" sx={{color: "#9FA6AD"}}>
                        answered no: 5
                    </Typography>
                    </Box>
                </Box>
            </Box>
          </Box>
        </Box>
        </Container>
    );
}