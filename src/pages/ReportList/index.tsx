import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ReportList: React.FC = () => {
  const programs = ["Program A", "Program B", "Program C"];

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        報告リスト管理
      </Typography>
      <List>
        {programs.map((program, index) => (
          <ListItem key={index} button>
            <ListItemText primary={program} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ReportList;
