import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header.jsx";
import { UnderConstruction } from "../UnderConstruction/UnderConstruction.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { TimeSchedule } from "../TimeSchedule/TimeSchedule";

export default function MainContainer() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid xs={10} item container>
        <Grid item xs={0} sm={2} sx={{ background: "#368195" }}></Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          sx={{ background: "#ffffff" }}
        >
          <UnderConstruction />
          <Contact />
          <TimeSchedule />
          <UnderConstruction />
        </Grid>
        <Grid item sm={2} sx={{ background: "#368195" }}></Grid>
      </Grid>
      <Grid item>
        <Header />
      </Grid>
    </Grid>
  );
}
