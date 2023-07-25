import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getBusTimes } from "../TfeService";

function retrieveData(setData, stopId) {
  getBusTimes(stopId).then((data) => setData(data));
}

export default function ComboBox({ stops, setData, setHomeStop, setButtonDisabled }) {
  return (
    <Autocomplete
      disablePortal
      freeSolo
      id="combo-box-demo"
      options={stops}
      defaultValue={stops[0]}
      getOptionLabel={(option) => {
        if (option.stop_name == null) {
          return "No stop selected";
        }
        return `${option.stop_name} \n(${option?.stop_id})`;
      }}
      isOptionEqualToValue={(option, value) => {
        option.stop_id === value.stop_id;
      }}
      onChange={(event, newValue) => {
        retrieveData(setData, newValue?.stop_id, newValue);
        setHomeStop(newValue);
        setButtonDisabled(newValue == null);
      }}
      sx={{ minWidth: 200 }}
      renderInput={(params) => <TextField {...params} label="Choose a stop" />}
    />
  );
}
