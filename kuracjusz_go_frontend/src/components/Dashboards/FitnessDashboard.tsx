import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

interface Activity {
  name: string;
  points: number;
  timestamp: string;
}

const calculatePoints = (activityName: string): number => {
  const normalized = activityName.trim().toLowerCase();
  switch (normalized) {
    case "spacer":
      return 5;
    case "trening":
      return 15;
    case "bieganie":
      return 20;
    case "joga":
      return 10;
    default:
      return 8;
  }
};

export default function FitnessDashboard() {
  const [newActivity, setNewActivity] = useState("");
  const [points, setPoints] = useState<number>(0);
  const [steps, setSteps] = useState<number>(0);
  const [isCounterRunning, setIsCounterRunning] = useState(false);
  const [startSteps, setStartSteps] = useState<number | null>(null);

  useEffect(() => {
    const storedSteps = Number(localStorage.getItem("steps") || 0);
    const storedPoints = Number(localStorage.getItem("points") || 0);
    setSteps(storedSteps);
    setPoints(storedPoints);

    // Zainicjalizuj osiągnięcia, jeśli brak
    if (!localStorage.getItem("stepsToday")) {
      localStorage.setItem("stepsToday", storedSteps.toString());
    }
    if (!localStorage.getItem("activitiesCompleted")) {
      const stored = localStorage.getItem("activities");
      const existingActivities: Activity[] = stored ? JSON.parse(stored) : [];
      localStorage.setItem("activitiesCompleted", existingActivities.length.toString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("points", points.toString());
  }, [points]);

  useEffect(() => {
    if (!isCounterRunning) return;

    const interval = setInterval(() => {
      setSteps((prevSteps) => {
        const newSteps = prevSteps + 1;
        localStorage.setItem("steps", newSteps.toString());
        localStorage.setItem("stepsToday", newSteps.toString()); // <- kluczowe
        return newSteps;
      });
    }, 750);

    return () => clearInterval(interval);
  }, [isCounterRunning]);

  const handleAddActivity = () => {
    if (!newActivity.trim()) return;

    const activityPoints = calculatePoints(newActivity);
    const activity: Activity = {
      name: newActivity.trim(),
      points: activityPoints,
      timestamp: new Date().toLocaleString(),
    };

    // Zapisywanie do historii
    const stored = localStorage.getItem("activities");
    const existingActivities: Activity[] = stored ? JSON.parse(stored) : [];
    const updatedActivities = [...existingActivities, activity];
    localStorage.setItem("activities", JSON.stringify(updatedActivities));

    // Aktualizacja liczby aktywności
    localStorage.setItem("activitiesCompleted", updatedActivities.length.toString());

    setPoints((prev) => prev + activityPoints);
    setNewActivity("");
  };

  const handleStopCounter = () => {
    setIsCounterRunning(false);
    if (startSteps !== null) {
      const stepDifference = steps - startSteps;
      const earnedPoints = +(stepDifference * 0.01).toFixed(2);
      setPoints((prev) => +(prev + earnedPoints).toFixed(2));
    }
    setStartSteps(null);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", p: 2 }}>
      <Typography variant="h2" gutterBottom textAlign="left">
        Moje Aktywności
      </Typography>

      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 4, mt: 8 }}>
        {/* Krokomierz */}
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Typography variant="h6">Krokomierz</Typography>
          <Typography sx={{ my: 1 }}>Liczba kroków dzisiaj: {steps}</Typography>
          {!isCounterRunning ? (
            <Button
              variant="contained"
              onClick={() => {
                setStartSteps(steps);
                setIsCounterRunning(true);
              }}
              sx={{ mt: 1 }}
            >
              Uruchom krokomierz
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="error"
              onClick={handleStopCounter}
              sx={{ mt: 1, ml: 2 }}
            >
              Zatrzymaj krokomierz
            </Button>
          )}
        </Box>

        {/* Dodaj aktywność */}
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Typography variant="h6">Dodaj aktywność</Typography>
          <TextField
            label="Nazwa aktywności (np. Trening, Spacer)"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <Button variant="contained" onClick={handleAddActivity}>
            Zapisz aktywność
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">
          Suma punktów: <strong>{points}</strong>
        </Typography>
      </Box>
    </Box>
  );
}
