import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';




import Sheet from '@mui/joy/Sheet';
import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
  
} from "../common/DisplayComponent";

const Step5 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Reservation",
          type: "h6",
          color: "textPrimary",
          align: "start",
        })}
      </Box>



        <Grid item xs={12} sm={6}>
        <Box>
      <Typography id="sandwich-group" level="body3" fontWeight="lg" mb={1}>
      Allow instant booking
      </Typography>
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Yes" defaultChecked />
          </ListItem>
         
        </List>
      </Box>
    </Box>
        </Grid>


        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={50}>
          {renderInputField({
            state,
            name: "Number of Guests",
            label: "Number of Guests",
            type: "number",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={50}>
          {renderInputField({
            state,
            name: "Price per each additional guests",
            label: "Price per each additional guests",
            type: "number",
            onChange: handleChange,
          })}
        </Grid>
        
      </Grid>


      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Minimum number of hours per reservation",
            label: "Minimum number of hours per reservation",
            type: "",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Maximum number of hours per reservation",
            label: "Maximum number of hours per reservation",
            type: "",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>






      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={50}>
          {renderSelect({
            state,
            name: "Appointment Duration",
            label: "Appointment Duration",
            options: [
              {key:"Select",value:"Select"},
              { key: "10min", value: "10min" },
              { key: "20min", value: "20min" },
              { key: "30min", value: "30min" },
              { key: "40min", value: "40min" },
              { key: "50min", value: "40min" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={50}>
          {renderSelect({
            state,
            name: "Time between appointment",
            label: "Time between appointment",
            options: [
              {key:"Select",value:"Select"},
              { key: "Noun", value: "Noun" },
              { key: "05min", value: "05min" },
              { key: "10min", value: "10min" },
              { key: "15min", value: "15min" },
              { key: "20min", value: "20min" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        
      </Grid>


      <Grid item xs={12} sm={6}>
        <Box>
      <Typography id="sandwich-group" level="body3" fontWeight="lg" mb={1}>
      Recurring period
      </Typography>
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Yes" defaultChecked />
          </ListItem>
         
        </List>
      </Box>
    </Box>
        </Grid>


        












        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>

          {renderSelect({
            state,
            name: "Custom Price",
            label: "Custom Price",
            
            options: [
              {key:"Select",value:"Select"},
              { key: "100", value: "100" },
              { key: "200", value: "200" },
              { key: "300", value: "300" },
              { key: "400", value: "400" },
              { key: "500", value: "400" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "Custom Weekend Price",
            label: "Custom Weekend Price",
           
            options: [
              {key:"Select",value:"Select"},
              { key: "100", value: "100" },
              { key: "200", value: "200" },
              { key: "300", value: "300" },
              { key: "400", value: "400" },
              { key: "500", value: "500" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      
      

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Finish", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step5;