import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function GoHomeButton() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 1300,
      }}
    >
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Wróć do Strony Głównej
      </Button>
    </Box>
  );
}
