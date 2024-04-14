import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64, // Default height for larger screens
  fontSize: 24, // Default font size
  [theme.breakpoints.up('sm')]: {
    height: 70, // Adjusted height for screens of 'sm' breakpoint and larger
  },
  [theme.breakpoints.down('sm')]: {
    height: 36, // Adjusted height for screens smaller than 'sm' breakpoint
    fontSize: 14, // Adjusted font size for smaller screens
  },
}));

export default Toolbar;
