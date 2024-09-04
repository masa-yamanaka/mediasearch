import React, { useState } from "react";
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
import UploadModal from "../../../components/UploadModal";
import { Modal } from "@mui/material";

// StyledTableCell without theme
const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5",
    color: "#fff",
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
    backgroundColor: "#f5f5f5",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
});
const drawerWidth = 240; // sidebar width
const padding = 3 * 9 * 3; // padding x mui base x extra

interface Program {
  name: string;
}
const programs: Program[] = [
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
  {
    name: "番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13番組13",
  },
];

const ProgramsList: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // General Modal
  const handleOpenModal = (program: Program, action: string) => {
    setSelectedProgram(program);
    setOpenModal(action);
  };

  // Upload Modal handler
  const handleOpenUploadModal = (program: Program) => {
    setSelectedProgram(program);
    setOpenModal("upload");
  };

  const handleCloseModal = () => {
    setOpenModal(null);
    setSelectedProgram(null);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer
        component={Paper}
        elevation={8}
        sx={{ width: `calc(100vw - ${drawerWidth + padding}px)` }}
        // sx={{ minWidth: "1200px" }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "auto", minWidth: 200 }}>
                番組名
              </StyledTableCell>
              <StyledTableCell
                sx={{ width: "1%", whiteSpace: "nowrap", textAlign: "left" }}
              >
                アクション
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programs.map((program, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{program.name}</StyledTableCell>
                <StyledTableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleOpenUploadModal(program)}
                      sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                    >
                      アップロード
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleOpenModal(program, "Edit")}
                      sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                    >
                      編集
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleOpenModal(program, "Delete")}
                      sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                    >
                      削除
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      onClick={() => handleOpenModal(program, "Undo")}
                      sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                    >
                      差し戻し
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleOpenModal(program, "Confirm")}
                      sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                    >
                      確定
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleOpenModal(program, "Unlock")}
                      sx={{
                        whiteSpace: "nowrap",
                        fontWeight: "bold",
                      }}
                    >
                      解除
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleOpenModal(program, "Download")}
                      sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                    >
                      ダウンロード
                    </Button>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UploadModal
        open={openModal === "upload"}
        onClose={handleCloseModal}
        program={selectedProgram}
      />
      <Modal
        open={!!openModal && openModal !== "upload"}
        onClose={handleCloseModal}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>{openModal} Action</h2>
          {selectedProgram && <p>{`Program: ${selectedProgram.name}`}</p>}
          <p>This is a modal for the {openModal} action.</p>

          <Button onClick={handleCloseModal} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProgramsList;
