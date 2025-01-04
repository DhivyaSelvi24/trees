import logo from './logo.svg';
import './App.css';
import {
  IconButton,
  Container,
  Grid,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  const [ug, setUg] = useState(false);
  const [expandug, setExpandug] = useState(false);
  const [expanddepartments, setExpanddepartments] = useState(false);


  function handleClick(e) {

    setUg(true)


  }

  function handleexpand(e) {
    if (e == "UG") {
      setExpandug(!expandug)
    }
    else if (e == "Departments" && expandug) {
      setExpanddepartments(!expanddepartments)
    }
  }



  return (
    <Container maxWidth="md" sx={{ padding: 15, margin: 5, textAlign: 'center', alignItems: 'center' }}>
      <Grid item md={3} sm={3} xs={3}>
        <IconButton>
          <AddIcon name="addicon" value="addicon" onClick={handleClick}>+</AddIcon>
        </IconButton>
      </Grid>
      <Grid container spacing={5}>


        {ug && (


          <Box display="flex" alignItems="center" >
            <IconButton sx={{ padding: 0, marginRight: 17 }} onClick={() => handleexpand("UG")}>
              {expandug ? <ArrowDropDownIcon sx={{ padding: 0 }} /> : <ArrowRightIcon />}
            </IconButton>
            <TextField id="name" variant='outlined' label="UG" />
          </Box>
        )}
      </Grid>

      {
        expandug && expanddepartments && (
          <Box >
            <IconButton sx={{ padding: 0, marginRight: 17 }} onClick={() => handleexpand("Departments")}>
              {expanddepartments ? <ArrowDropDownIcon sx={{ padding: 0 }} /> : <ArrowRightIcon />}
            </IconButton>


            <TextField id="name" variant='outlined' label="Departments" />

          </Box>
        )

      }

    </Container>

  );
}

export default App;