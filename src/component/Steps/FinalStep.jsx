import React from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const FinalStep = ({ data }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Submitted Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
    <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>
      </Box>

      {JSON.stringify(data, null, 4)}
    </Paper>
  );
};

export default FinalStep;
