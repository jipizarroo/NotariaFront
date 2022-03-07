import * as React from "react";
import { Paper, Typography, Box } from "@mui/material";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

export const UnderConstruction = () => {
  return (
    <Paper
      sx={{
        background: "#2b6777",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#ffffff",
        width: "100%",
        margin: "10px",
      }}
    >
      <NewReleasesIcon />
      <Typography variant="h6">Pagina en construcción</Typography>
      <NewReleasesIcon />
    </Paper>
  );
};
