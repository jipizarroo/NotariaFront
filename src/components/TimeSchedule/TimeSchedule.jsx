import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  tableCellClasses,
} from "@mui/material";

import * as React from "react";

export const TimeSchedule = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2b6777",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#368195",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#c8d8e4",
    },
    "&:nth-of-type(odd) > th, &:nth-of-type(odd) > td": {
      color: "white",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <TableContainer
      component={Paper}
      elevation={12}
      sx={{ margin: "20px auto ", maxWidth: "400px" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Días</StyledTableCell>
            <StyledTableCell align="center">
              <strong>Horarios de atención</strong>
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Lunes
            </StyledTableCell>
            <StyledTableCell align="center">8:30 a 17:30</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Martes
            </StyledTableCell>
            <StyledTableCell align="center">8:30 a 17:30</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Miércoles
            </StyledTableCell>
            <StyledTableCell align="center">8:30 a 17:30</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Jueves
            </StyledTableCell>
            <StyledTableCell align="center">8:30 a 17:30</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Viernes
            </StyledTableCell>
            <StyledTableCell align="center">8:30 a 17:30</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Sabado
            </StyledTableCell>
            <StyledTableCell align="center">Cerrado</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Domingo
            </StyledTableCell>
            <StyledTableCell align="center">Cerrado</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
