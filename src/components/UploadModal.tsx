import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
  // Slide,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
  program?: { name: string } | null;
}

const UploadModal: React.FC<UploadModalProps> = ({
  open,
  onClose,
  program,
}) => {
  const [fileName, setFileName] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState<boolean>(false);
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  // Reset the Snackbar visibility when the modal opens
  useEffect(() => {
    if (open) {
      setIsConfirming(false);
    } else {
      // Only reset errorSnackbarOpen if we are not confirming
      if (!isConfirming) {
        setErrorSnackbarOpen(false);
      }
    }
  }, [open, isConfirming]);

  const handleClose = () => {
    if (!isConfirming) {
      setFileName("");
    }
    onClose();
  };

  const handleUploadConfirm = () => {
    setIsConfirming(true);
    if (fileName === "") {
      setErrorSnackbarOpen(true);
    } else {
      setSnackbarOpen(true);
      handleClose();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleSnackbarClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
    setErrorSnackbarOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
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
          <Typography variant="h5" component="h2">
            ファイルアップロード
          </Typography>
          {program && (
            <Typography component="p">番組名: {program.name}</Typography>
          )}

          <Box sx={{ mt: 4, mb: 8, display: "flex", alignItems: "center" }}>
            <TextField
              value={fileName}
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              sx={{ m: 0, mr: 2 }}
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              disableElevation
              startIcon={<CloudUploadIcon />}
              sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
            >
              参照…
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                style={{ display: "none" }}
              />
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button
              color="success"
              onClick={handleClose}
              sx={{ fontWeight: "bold" }}
            >
              キャンセル
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleUploadConfirm}
              sx={{ fontWeight: "bold" }}
            >
              アップロード
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Successful Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        // TransitionComponent={(props) => <Slide {...props} direction="up" />}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          アップロード成功!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        // TransitionComponent={(props) => <Slide {...props} direction="up" />}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          ファイルが選択されていません!
        </Alert>
      </Snackbar>
    </>
  );
};

export default UploadModal;
