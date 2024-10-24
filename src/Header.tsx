import { Box, Typography } from '@mui/material';

function Header() {
    return (
     <>
     <Box sx={{
        display : "flex",
        justifyContent : "center",
        backgroundColor : "mediumaquamarine"
     }}>
        <Typography variant="h2" sx={{
            marginTop : "10px",
            marginBottom : "10px",
            fontWeight : "700"
        }}>Parhaat Mökit</Typography>
     </Box>
     </>
    );
  }
  
  export default Header;