import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ background: "#2b6777", height: "100%" }}>
        <Typography variant="h4" sx={{ fontFamily: "'Cinzel',serif" }}>
          Notaria de San Ramon
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
