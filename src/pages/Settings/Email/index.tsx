import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const EmailSettings: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        メールアドレス設定
      </Typography>
      <TextField
        label="Email Address"
        fullWidth
        margin="normal"
        defaultValue="user@example.com"
      />
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Save Changes
      </Button>
    </Container>
  );
};

export default EmailSettings;
