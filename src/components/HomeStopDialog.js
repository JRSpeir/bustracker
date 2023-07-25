import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ComboBox from "./ComboBox";
import { Box, Button, Typography } from "@mui/material";

function SimpleDialog(props) {
  const { onClose, open, setData, stops, setHomeStop, homeStop } = props;
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  return (
    <Dialog open={open} fullWidth={true}>
      <DialogTitle>Select Home Stop</DialogTitle>
      <Box height="100vh" sx={{ mx: 4, my: 2 }}>
        <ComboBox
          stops={stops}
          setData={setData}
          setHomeStop={setHomeStop}
          setButtonDisabled={setButtonDisabled}
        />
        <Box display="flex" flexDirection="column" justifyContent="space-around" sx={{ my: 2 }}>
          <Typography sx={{my:1}}>Stop Direction: {homeStop?.direction}</Typography>
          <Typography sx={{my:1}}>Stop Services: {homeStop?.services?.join(", ")}</Typography>
          <Typography sx={{my:1}}>Stop Destinations: {homeStop?.destinations?.join(", ")}</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-around" sx={{ my: 2 }}>
        <Button
          size="large"
          variant="contained"
          endIcon={<DoneOutlineIcon />}
          onClick={() => {
            onClose();
          }}
          disabled={buttonDisabled}
        >
          Accept
        </Button>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setData: PropTypes.func.isRequired,
  stops: PropTypes.array.isRequired,
  setHomeStop: PropTypes.func.isRequired,
  homeStop: PropTypes.object,
};

export default SimpleDialog;
