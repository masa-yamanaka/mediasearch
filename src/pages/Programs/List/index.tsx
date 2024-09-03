import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// StyledTableCell without theme
const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Header background color
    color: "#fff", // Header text color
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "left",
  },
});

// StyledTableRow without theme
const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5", // Alternate row color
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
});
const drawerWidth = 240; // sidebar width
const padding = 3 * 9 * 3; // padding x mui base x extra

const rows = [
  { name: "番組1" },
  { name: "番組2" },
  { name: "番組3" },
  { name: "番組4" },
  { name: "番組5" },
  { name: "番組6" },
  { name: "番組7" },
  { name: "番組8" },
  { name: "番組9" },
  { name: "番組10" },
  { name: "番組11" },
  { name: "番組12" },
  { name: "番組13" },
];

const ProgramsList: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer
        component={Paper}
        elevation={8}
        sx={{ width: `calc(100vw - ${drawerWidth + padding}px)` }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ minWidth: 100 }}>番組名</StyledTableCell>
              <StyledTableCell>アクション</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>
                  <Button variant="contained" color="primary" size="small">
                    Upload
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    sx={{ mx: 1 }}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProgramsList;
