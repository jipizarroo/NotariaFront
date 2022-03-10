import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="relative" sx={{ height: "100%" }}>
      <Toolbar sx={{ background: "#2b6777", height: "100%" }}>
        <Typography variant="h4" sx={{ fontFamily: "'Cinzel',serif" }}>
          Notaria de San Ramon
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
