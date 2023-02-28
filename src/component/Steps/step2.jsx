import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Travel Agency Information",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "Agency Information",
            label: "Location",
            options: [
              {key:"Select",value:"Select"},
              { key: "Inida", value: "India" },
              { key: "southfrica", value: "southafrica" },
              { key: "London", value: "London" },
              { key: "paris", value: "Paris" },
              { key: "America", value: "America" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Agency Trade Name",
            label: "Agency Trade Name",
            onChange: handleChange,
          })}
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "Company Name",
            label: "Company Name",
            options: [
              { key: "Manager", value: "Manager" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "Clerk", value: "Clerk" },
              { key: "Helper", value: "Helper" },
            ],
            onChange: handleChange,
          })} */}
          <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Company Name",
            label: "Company Name",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>
      






      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Address*",
            label: "Address*",
            onChange: handleChange,
          })}
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "jobApplyFor",
            label: "JobApplyFor",
            options: [
              { key: "Manager", value: "Manager" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "Clerk", value: "Clerk" },
              { key: "Helper", value: "Helper" },
            ],
            onChange: handleChange,
          })}
        </Grid> */}

<Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Town/City*",
            label: "Town/City*",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>





      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "State*",
            label: "State*",
            onChange: handleChange,
          })}
        </Grid>
       

<Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "ZIP Code*",
            label: "ZIP Code*",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>




      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Telephone Number*",
            label: "Telephone Number*",
            onChange: handleChange,
          })}
        </Grid>
       

<Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Fax Number",
            label: "Fax Number",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
       
       

<Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Local Association Number",
            label: "Local Association Number",
            onChange: handleChange,
          })}
        </Grid>

  
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Registered Company Number",
            label: "Registered Company Number",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Internet Address/Website",
            label: "Internet Address/Website",
            onChange: handleChange,
          })}
        </Grid>
        </Grid>





      ``

      
        
     




        
  
      





      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
   
  );
};

export default Step2;
