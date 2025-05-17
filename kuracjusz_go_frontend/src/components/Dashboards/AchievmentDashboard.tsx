import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Fade,
} from "@mui/material";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";

interface Achievement {
  title: string;
  description: string;
  unlocked: boolean;
  icon: JSX.Element;
}

const AchievementDashboard: React.FC = () => {
  const [stepsToday, setStepsToday] = useState<number>(0);
  const [activities, setActivities] = useState<number>(0);

  useEffect(() => {
    const storedSteps = localStorage.getItem("stepsToday");
    setStepsToday(storedSteps ? parseInt(storedSteps, 10) : 0);

    const storedActivities = localStorage.getItem("activitiesCompleted");
    setActivities(storedActivities ? parseInt(storedActivities, 10) : 0);
  }, []);

  const iconStyle = { fontSize: "2rem", color: "#ffffff" };

  const achievements: Achievement[] = [
    {
      title: "Pierwszy Krok",
      description: "Wykonaj 1 krok!",
      unlocked: stepsToday >= 1,
      icon: <DirectionsWalkIcon sx={iconStyle} />,
    },
    {
      title: "1000 Kroków",
      description: "Zrób 1000 kroków w ciągu dnia",
      unlocked: stepsToday >= 1000,
      icon: <WhatshotIcon sx={iconStyle} />,
    },
    {
      title: "Aktywny Dzień",
      description: "Wykonaj 3 aktywności jednego dnia",
      unlocked: activities >= 3,
      icon: <FlashOnIcon sx={iconStyle} />,
    },
    {
      title: "Forma!",
      description: "Wykonaj 10 aktywności w sumie",
      unlocked: activities >= 10,
      icon: <EmojiEventsIcon sx={iconStyle} />,
    },
    {
      title: "Zaangażowany",
      description: "Zaloguj się i wykonaj pierwszy ruch",
      unlocked: stepsToday > 0 && activities > 0,
      icon: <VerifiedIcon sx={iconStyle} />,
    },
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: "#121212", minHeight: "100vh" }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#ffffff" }}>
        Twoje Osiągnięcia
      </Typography>
      <Grid container spacing={2}>
        {achievements.map((ach, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Fade in timeout={600 + index * 100}>
              <Card
                sx={{
                  backgroundColor: ach.unlocked ? "#1e1e1e" : "#2c2c2c",
                  borderRadius: 4,
                  p: 2,
                  height: "100%",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      mx: "auto",
                      mb: 1,
                      width: 56,
                      height: 56,
                    }}
                    variant="rounded"
                  >
                    {ach.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                    {ach.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc" }}>
                    {ach.description}
                  </Typography>
                  {ach.unlocked && (
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, fontWeight: 600, color: "#81c784" }}
                    >
                      Odblokowano!
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AchievementDashboard;
