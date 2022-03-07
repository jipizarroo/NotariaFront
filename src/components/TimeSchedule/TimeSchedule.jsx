import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import * as React from "react";

export const TimeSchedule = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: "10px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>-</TableCell>
            <TableCell>Testing</TableCell>
            <TableCell>This</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};
