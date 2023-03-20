import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

import Sheet from '@mui/joy/Sheet';
import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';

import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
  checked
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Category.",
          type: "h4",
          color: "textPrimary",
          align: "start",
        })}
        
      
      </Box>
     

      {/* <Box mt={2} mb={2}>
        {renderText({
          label: "Great For",
          type: "h6",
          color: "textPrimary",
          align: "",
        })}
      </Box> */}

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
      

        <Box>
      <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1}>
      Great For
      </Typography>
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Everyone" defaultChecked />
          </ListItem>
          <ListItem>
            <Checkbox label="Families" />
          </ListItem>
          <ListItem>
            <Checkbox label="Groups" />
          </ListItem>
          <ListItem>
            <Checkbox label="Collages Students" />
          </ListItem>
        </List>
      </Box>
    </Box>
          
        </Grid>
        </Grid>





        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={50}>
        <Grid container item spacing={3}>
        <Box>
      <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1}>
     Group Size
      </Typography>
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="1-3 guests" defaultChecked />
          </ListItem>
          <ListItem>
            <Checkbox label="4-10 guests" />
          </ListItem>
          <ListItem>
            <Checkbox label="11-30 guests" />
          </ListItem>
          <ListItem>
            <Checkbox label="30+ guests" />
          </ListItem>
        </List>
      </Box>
    </Box>
      
    </Grid>
    
    </Grid>


        <Grid item xs={12} sm={6}>
        
        
        <Box>
      <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1}>
      Regions 
      </Typography>
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Paris" defaultChecked />
          </ListItem>
          <ListItem>
            <Checkbox label="Amsterdam" />
          </ListItem>
          <ListItem>
            <Checkbox label="London" />
          </ListItem>
          <ListItem>
            <Checkbox label="Zurich" />
          </ListItem>
        </List>
      </Box>
   </Box>
      
  
        </Grid>
        </Grid>


      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Next", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
