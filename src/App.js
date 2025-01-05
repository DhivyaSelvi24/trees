import React, { useState } from 'react';
import './App.css';
import {
  IconButton,
  Container,
  Grid,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
  const [ug, setUg] = useState(false);

  // Sample tree data structure
  const data = {
    name: "UG",
    children: [{
      name: "Arts", children: [
        {
          name: "Departments",
          children: [
            {
              name: "BSc Computer Science",
              children: [{ name: "Seminar Topics", children: [] },
              {
                name: "Practicals Result",
                children: []
              },
              {
                name: "Semester",
                children: []
              }
              ]
            },
            {
              name: "BSc Maths",
              children: []
            }
          ]
        }
      ],

    },
    {
      name: "Engineering",
      children: [{
        name: "Departments",
        children: [
          {
            name: "Civil",
            children: []
          },
          {
            name: "Mechanical",
            children: []
          }
        ]
      }]

    }]

  };

  // Recursive component to render tree items with TextField
  const RenderTree = ({ node }) => {
    const [expanded, setExpanded] = useState(false);

    // Toggle the expanded state
    const handleExpandToggle = () => {
      setExpanded(prev => !prev);
    };

    return (
      <Box sx={{ marginLeft: expanded ? 2 : 0 }}>
        <Box display="flex" alignItems="center">
          {node.children.length > 0 && (
            <IconButton onClick={handleExpandToggle}>
              {expanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </IconButton>
          )}

          {/* Render the TextField with the node name */}
          <TextField
            variant="outlined"
            label={node.name}
          />
        </Box>

        {/* If expanded and there are children, recursively render them */}
        {expanded && node.children.length > 0 && (
          <Box sx={{ marginLeft: 2 }}>
            {node.children.map((childNode, index) => (
              <RenderTree key={index} node={childNode} />
            ))}
          </Box>
        )}
      </Box>
    );
  };

  const handleClick = () => {
    setUg(true);
  };

  return (
    <Container maxWidth="md" sx={{ padding: 15, margin: 5, textAlign: 'center', alignItems: 'center' }}>
      {/* Initially only the "+" button */}
      {!ug && (
        <Grid item md={3} sm={3} xs={3}>
          <IconButton onClick={handleClick}>
            <AddIcon />
          </IconButton>
        </Grid>
      )}

      {/* When UG is true, show the recursive tree structure */}
      {ug && <RenderTree node={data} />}
    </Container>
  );
}

export default App;
