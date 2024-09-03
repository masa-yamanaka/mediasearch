import React from "react";
import {
  Container,
  Typography,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const Programs: React.FC = () => {
  const programs = ["Program A", "Program B", "Program C"];

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        番組連携
      </Typography>
      <List>
        {programs.map((program, index) => (
          <ListItemButton key={index}>
            <ListItemText primary={program} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default Programs;
