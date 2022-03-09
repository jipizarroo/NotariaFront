import React from "react";
import { Grid } from "@mui/material";
import Header from "../Header/Header.jsx";
import { UnderConstruction } from "../UnderConstruction/UnderConstruction.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { TimeSchedule } from "../TimeSchedule/TimeSchedule";
import { Footer } from "../Footer/Footer.jsx";

export default function MainContainer() {
  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item xs={1} style={{ border: "solid 1px" }}>
        <Header />
      </Grid>
      <Grid
        item
        xs={10}
        style={{ border: "solid 1px", backgroundColor: "purple" }}
      >
        <Grid container direction="row" style={{ height: "100%" }}>
          <Grid
            item
            container
            direction="column"
            xs={0}
            sm={2}
            sx={{ background: "#368195", height: "100%" }}
          >
            <Grid item xs={10}>
              1
            </Grid>
            <Grid>2</Grid>
          </Grid>
          <Grid item xs={0} sm={8}>
            2
          </Grid>
          <Grid item xs={0} sm={2} sx={{ background: "#368195" }}>
            3
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} style={{ border: "solid 1px", backgroundColor: "red" }}>
        Content
      </Grid>
    </Grid>
    // <Grid
    //   container
    //   direction="row"
    //   justifyContent="space-between"
    //   alignItems="stretch"
    //   rowSpacing={0}
    //   columnSpacing={0}
    //   xs={12}
    //   sx={{ background: "#368195" }}
    // >
    //   <Grid item>
    //     <Header />
    //   </Grid>
    //   <Grid item container direction="row">
    //     <Grid item xs={0} sm={2} sx={{ background: "#368195" }}></Grid>
    //     <Grid
    //       container
    //       item
    //       direction="row"
    //       justifyContent="center"
    //       alignItems="stretch"
    //       sx={{ background: "#ffffff" }}
    //       xs={12}
    //       sm={8}
    //     >
    //       <UnderConstruction />
    //       <Contact />
    //       <TimeSchedule />
    //       <UnderConstruction />
    //     </Grid>
    //     <Grid item xs={0} sm={2} sx={{ background: "#368195" }}></Grid>
    //   </Grid>
    //   <Grid item sx={{ background: "#368195" }}>
    //     <Footer />
    //   </Grid>
    // </Grid>
  );
}
