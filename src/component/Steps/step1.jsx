import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "General",
          type: "h4",
          color: "textPrimary",
          align: "start",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "45px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Title",
            label: "Title",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={60}>
          {renderInputField({
            state,
            name: "Description",
            label: "Description",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>


      {/* <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Password",
            label: "Password",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>





      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Re-type password",
            label: "Re-type password",
            type: "",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        
        <Box mt={2} mb={2}>
        {renderText({
          label: "Terms and Conditions",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
        <label><input type="checkbox" required /> I agree to and accept the Weshare Travel Agency Affiliate Agreement. We suggest you print it and keep a copy.!</label>
    
      </Grid> */}

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
