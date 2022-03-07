import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ background: "#2b6777" }}>
        <Typography variant="h4">Notaria de San Ramon</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
