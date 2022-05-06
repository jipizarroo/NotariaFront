import * as React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Contact = () => {
  return (
    <Paper
      elevation={12}
      sx={{
        background: "#368195",
        color: "#ffffff",
        margin: "20px 10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px 0",
        }}
      >
        <Typography variant="subtitle2">Última actualizacion del sitio: 06/04/2022</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <ContactPhoneIcon sx={{ margin: "0 10px 0 0" }} />
        <Typography variant="h6" sx={{ margin: "0 10px 0 0" }}>
          Número telefonico:{" "}
        </Typography>

        <Typography variant="h6">2 2615 0414</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 10px",
        }}
      >
        <LocationOnIcon sx={{ margin: "0 10px 0 0" }} />
        <Typography variant="h6" sx={{ margin: "0 10px 0 0" }}>
          Direccion:{" "}
        </Typography>
        <Typography variant="h6">
          Av. Santa Rosa 7955, Comuna de San Ramon - Paradero: 21 1/2
        </Typography>
      </Box>
    </Paper>
  );
};
