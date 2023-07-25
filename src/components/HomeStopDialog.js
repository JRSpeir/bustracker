import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ComboBox from './ComboBox';
import { Box } from '@mui/material';

function SimpleDialog(props) {
  const { onClose, open, setData, stops, setHomeStop} = props;

  return (
    <Dialog open={open} fullWidth={true}>
      <DialogTitle>Select Home Stop</DialogTitle>
      <Box height="100vh" sx={{mx: 4, my: 2}}>
        <ComboBox stops={stops} setData={setData} onSelect={onClose} setHomeStop={setHomeStop}/>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setData: PropTypes.func.isRequired,
  stops: PropTypes.array.isRequired,
  setHomeStop: PropTypes.func.isRequired
};

export default SimpleDialog
