import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField label="Username" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: "20px" }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
