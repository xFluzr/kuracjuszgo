import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

interface User {
  name: string;
  points: number;
}

const generateRandomUsers = (count: number): User[] => {
  const names = ["Ola", "Marek", "Julia", "Kuba", "Zosia", "Adam", "Basia", "Łukasz", "Ania", "Tomek"];
  return Array.from({ length: count }, (_, i) => ({
    name: names[i % names.length] + (i > names.length ? ` ${i}` : ""),
    points: Math.floor(Math.random() * 1000),
  }));
};

const RankingDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const randomUsers = generateRandomUsers(10);
    const sorted = [...randomUsers].sort((a, b) => b.points - a.points);
    setUsers(sorted);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Ranking Użytkowników
      </Typography>
      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <List>
            {users.map((user, idx) => (
              <React.Fragment key={idx}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: idx === 0 ? "gold" : idx === 1 ? "silver" : idx === 2 ? "#cd7f32" : "#90caf9" }}>
                      {idx === 0 ? <EmojiEventsIcon /> : <SportsScoreIcon />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${idx + 1}. ${user.name}`}
                    secondary={`Punkty: ${user.points}`}
                  />
                </ListItem>
                {idx < users.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RankingDashboard;