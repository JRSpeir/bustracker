import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getBusTimes } from "../TfeService";

function retrieveData(setData, stopId) {
  getBusTimes(stopId).then((data) => setData(data));
}

export default function ComboBox({
  stops,
  setData,
  setButtonDisabled,
  setSelectedStop,
  selectedStop,
}) {
  return (
    <Autocomplete
      disablePortal
      freeSolo
      id="combo-box-demo"
      options={stops}
      value={selectedStop}
      getOptionLabel={(option) => {
        return determineStopLabel(option);
      }}
      isOptionEqualToValue={(option, value) => option.stop_id === value.stop_id}
      onChange={(event, newValue) => {
        retrieveData(setData, newValue?.stop_id, newValue);
        setSelectedStop(newValue);
        setButtonDisabled(newValue == null);
      }}
      sx={{ minWidth: 200 }}
      renderInput={(params) => <TextField {...params} label="Choose a stop" />}
    />
  );
}

function determineStopLabel(stop) {
  if ((stop === null) | (stop === {})) {
    return "No stop selected";
  }
  return `${stop.stop_name} \n(${stop.stop_id})`;
}
