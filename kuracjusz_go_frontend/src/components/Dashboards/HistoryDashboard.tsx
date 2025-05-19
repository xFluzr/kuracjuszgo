import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

interface Activity {
  name: string;
  points: number;
  timestamp: string;
}

export default function HistoryDashboard() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("activities");
    if (stored) {
      setActivities(JSON.parse(stored));
    }
  }, []);

  const totalPoints = activities.reduce((sum, a) => sum + a.points, 0);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Historia Aktywności
      </Typography>

      {activities.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          Brak zapisanych aktywności.
        </Typography>
      ) : (
        <>
          <List>
            {activities.map((activity, index) => (
              <Box key={index}>
                <ListItem>
                  <ListItemText
                    primary={`${activity.name} (+${activity.points} pkt)`}
                    secondary={activity.timestamp}
                  />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>

          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Typography variant="h6">
              Suma punktów: <strong>{totalPoints}</strong>
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}
