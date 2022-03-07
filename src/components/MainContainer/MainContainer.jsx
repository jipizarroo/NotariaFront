import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header.jsx";
import { UnderConstruction } from "../UnderConstruction/UnderConstruction.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { TimeSchedule } from "../TimeSchedule/TimeSchedule";

export default function MainContainer() {
  return (
    <Grid container spacing={0} direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} sx={{ background: "#c8d8e4" }}></Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          sx={{ background: "#ffffff" }}
          sm={8}
        >
          <UnderConstruction />
          <Contact />
          <TimeSchedule />
        </Grid>
        <Grid item sm={2} sx={{ background: "#c8d8e4" }}></Grid>
      </Grid>
    </Grid>
  );
}
