import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getBusTimes } from "../TfeService";

function retrieveData(setData, stopId, onSelect) {
  getBusTimes(stopId).then((data) => setData(data));
  onSelect();
}

export default function ComboBox({ stops, setData, onSelect, setHomeStop }) {
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
        retrieveData(setData, newValue?.stop_id, onSelect, newValue);
        setHomeStop(newValue);
      }}
      sx={{ minWidth: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a stop" />}
    />
  );
}
