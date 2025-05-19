import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Fade,
} from "@mui/material";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

interface Task {
  title: string;
  completed: boolean;
}

const DailyTasksDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Zrób 500 kroków", completed: false },
    { title: "Dodaj aktywność ręcznie", completed: false },
    { title: "Wykonaj 2 aktywności", completed: false },
    { title: "Zaloguj się dziś", completed: false },
  ]);

  useEffect(() => {
    const stored = localStorage.getItem("dailyTasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    localStorage.setItem("dailyTasks", JSON.stringify(updated));
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
        Dzisiejsze Zadania
      </Typography>
      <Grid container spacing={2}>
        {tasks.map((task, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Fade in timeout={400 + idx * 100}>
              <Card
                sx={{
                  backgroundColor: task.completed ? "#1e4620" : "#2c2c2c",
                  borderRadius: 3,
                  height: "100%",
                  color: "#fff",
                }}
              >
                <CardContent>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon htmlColor="#bbb" />}
                        checkedIcon={<CheckBoxIcon htmlColor="#4caf50" />}
                        checked={task.completed}
                        onChange={() => toggleTask(idx)}
                      />
                    }
                    label={
                      <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                        {task.title}
                      </Typography>
                    }
                  />
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DailyTasksDashboard;
