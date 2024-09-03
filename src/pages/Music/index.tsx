// src/pages/Music/index.tsx

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

// Sample data for the cards
const musicData = [
  { id: 1, title: "Song 1", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Song 2", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Song 3", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Song 4", image: "https://via.placeholder.com/150" },
];

const Music: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        楽曲連携
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
      >
        {musicData.map((item) => (
          <Box
            key={item.id}
            // width={{ xs: "100%", sm: "48%", md: "23%" }}
            width="48%"
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Music;
