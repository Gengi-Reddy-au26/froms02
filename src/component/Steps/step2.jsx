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
          label: "About the listing",
          type: "h4",
          color: "textPrimary",
          align: "",
        })}
      </Box>

      
      
      






      
    








      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Telephone Number*",
            label: "Telephone Number*",
            onChange: handleChange,
          })}
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
      </Grid>
    </Paper>
  );   
  
};

export default Step2;
