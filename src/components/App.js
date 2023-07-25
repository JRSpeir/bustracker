import React, { useEffect, useState } from "react";
import { getStops } from "../TfeService.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "./Table.js";
import HomeStopDialog from "./HomeStopDialog.js";

function retrieveStops(setStops) {
  getStops().then((stops) => setStops(stops));
}

export default function App() {
  const [data, setData] = useState([]);
  const [stops, setStops] = useState([]);
  const [open, setOpen] = useState(false);
  const [homeStop, setHomeStop] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    retrieveStops(setStops);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bus Tracker
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Home Stop: {homeStop?.stop_name}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          alignItems="center"
          variant="outlined"
          onClick={handleClickOpen}
        >
          Change Home Stop
        </Button>
      </Box>
      <Box sx={{ my: 4 }}>
        <Table data={data} />
      </Box>
      <HomeStopDialog
        setData={setData}
        open={open}
        onClose={handleClose}
        stops={stops}
        setHomeStop={setHomeStop}
      />
    </Container>
  );
}
