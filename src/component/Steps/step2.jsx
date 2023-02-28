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
            name: "IATA/ARC/CLIA/TrueID Code*",
            label: "IATA/ARC/CLIA/TrueID Code*",
            onChange: handleChange,
          })}
        </Grid>
       

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





      <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Agency Information",
          label:"How did you hear about the Expedia TAAP programme?*",
          type: "h6",
          color: "textPrimary",
          align: "begin",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "Agency Information,",
            label: "Select",
            options: [
              {key:"Select",value:"Select"},
              { key: "FAX", value: "FAX" },
              { key: "social media", value: "social media" },
              { key: "Telesale", value: "Telesale" },
              { key: "Frineds", value: "Friends" },
              { key: "Others", value: "Others" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Promo Code",
            label: "Promo Code",
            onChange: handleChange,
          })}
        </Grid>
        <Box mt={2} mb={2}>
        {renderText({
          label: "Terms and Conditions",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

<label><input type="checkbox" required /> I agree to and accept the Expedia Travel Agency Affiliate Agreement. We suggest you print it and keep a copy for your records.</label>
<label><input type="checkbox" required />I acknowledge I must provide banking and tax information to be eligible for commission payments. This information will be requested after acceptance to the programme.</label>
    

      </Grid>

      
        
     




        
  
      





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
    </Paper>
  );
};

export default Step2;
