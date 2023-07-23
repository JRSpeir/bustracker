import React, { useEffect, useState } from "react";
import {getBusTimes, getStops} from "../TfeService.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "./Table.js";
import ComboBox from "./ComboBox.js";

function retriveData(setData) {
  getBusTimes().then((data) => setData(data));
}

function retriveStops(setStops) {
  getStops().then((stops) => setStops(stops));
}

export default function App() {
  const [data, setData] = useState([]);
  const [stops, setStops] = useState([]);


  useEffect(() => {
    retriveData(setData);
    retriveStops(setStops)
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bus Tracker
        </Typography>
        <ComboBox stops={stops}/>
        <Table data={data} />
      </Box>
    </Container>
  );
}
