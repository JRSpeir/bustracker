import * as React from "react";
import PropTypes from "prop-types";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import ExploreIcon from "@mui/icons-material/Explore";
import SignpostIcon from "@mui/icons-material/Signpost";
import { DirectionsBus } from "@mui/icons-material";
import ComboBox from "./ComboBox";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
} from "@mui/material";

function SimpleDialog(props) {
  const { onClose, open, setData, stops, setHomeStop } = props;
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [selectedStop, setSelectedStop] = React.useState(null);

  return (
    <Dialog open={open} fullWidth={true}>
      <Box display="flex" justifyContent="space-between" sx={{ my: 2, mx: 2 }}>
        <DialogTitle>Select Home Stop</DialogTitle>
        <IconButton
          size="large"
          children={<CancelIcon />}
          onClick={() => {
            setHomeStop(selectedStop);
            onClose();
          }}
        />
      </Box>
      <Box height="100vh" sx={{ mx: 4, my: 2 }}>
        <ComboBox
          stops={stops}
          setData={setData}
          setHomeStop={setHomeStop}
          setButtonDisabled={setButtonDisabled}
          setSelectedStop={setSelectedStop}
          selectedStop={selectedStop}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          sx={{ my: 2, mx: 5 }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            sx={{ my: 3 }}
          >
            <ExploreIcon fontSize="large" />
            <Typography sx={{ mx: 1 }}>Stop Direction:</Typography>
            <Typography>{selectedStop?.direction}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            sx={{ my: 3 }}
          >
            <DirectionsBus fontSize="large" />
            <Typography sx={{ mx: 1 }}>Stop Services:</Typography>
            <Typography>{selectedStop?.services?.join(", ")}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            sx={{ my: 3 }}
          >
            <SignpostIcon fontSize="large" />
            <Typography sx={{ mx: 1 }}>Stop Destinations:</Typography>
            <Typography>{selectedStop?.destinations?.join(", ")}</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-around" sx={{ my: 2 }}>
        <Button
          size="large"
          variant="contained"
          endIcon={<DoneOutlineIcon />}
          onClick={() => {
            setHomeStop(selectedStop);
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
};

export default SimpleDialog;
