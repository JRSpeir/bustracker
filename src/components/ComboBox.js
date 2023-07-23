import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({stops}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={stops}
      getOptionLabel={(option) => option.stop_name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a stop" />}
    />
  );
}