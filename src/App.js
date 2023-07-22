import React, { useEffect, useState } from "react";
import getBusTimes from "./TfeService.js";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "./Table";

function retriveData(setData) {
  getBusTimes().then((data) => setData(data));
}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    retriveData(setData);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bus Tracker
        </Typography>
        <Table data={data} />
      </Box>
    </Container>
  );
}
