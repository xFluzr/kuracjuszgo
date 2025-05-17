import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Tooltip from "@mui/material/Tooltip";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { createTheme, useColorScheme } from "@mui/material/styles";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";

import CustomLogo from "../components/CustomLogo/CustomLogo";
import GoHomeButton from "../components/GoHomeBtn/GoHomeBtn";
import FitnessDashboard from "../components/Dashboards/FitnessDashboard";
import HistoryDashboard from "../components/Dashboards/HistoryDashboard";
import AchievementDashboard from "../components/Dashboards/AchievmentDashboard";

const NAVIGATION: Navigation = [
  { kind: "header", title: "Możliwe Opcje" },
  { segment: "dashboard", title: "Moje Aktywności", icon: <SportsGymnasticsIcon /> },
  { segment: "history", title: "Historia Aktywności", icon: <HistoryIcon /> },
  { segment: "achievement", title: "Osiągniecia", icon: <EmojiEventsIcon /> },
  { segment: "group", title: "Moja Grupa", icon: <GroupIcon /> },
  { segment: "quests", title: "Dzisiejsze Zadania", icon: <CheckBoxOutlinedIcon /> },
  { segment: "ranking", title: "Rankingi", icon: <EqualizerOutlinedIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function CustomThemeSwitcher() {
  const { setMode } = useColorScheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLElement | null>(null);

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(isMenuOpen ? null : event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value as "light" | "dark" | "system");
  };

  return (
    <>
      <Tooltip title="Settings" enterDelay={1000}>
        <IconButton onClick={toggleMenu}><SettingsIcon /></IconButton>
      </Tooltip>
      <Popover
        open={isMenuOpen}
        anchorEl={menuAnchorEl}
        onClose={toggleMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        disableAutoFocus
      >
        <Box sx={{ p: 2 }}>
          <FormControl>
            <FormLabel id="theme-switch-label">Theme</FormLabel>
            <RadioGroup
              aria-labelledby="theme-switch-label"
              defaultValue="system"
              name="theme-switch"
              onChange={handleThemeChange}
            >
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="system" control={<Radio />} label="System" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Popover>
    </>
  );
}

export default function DashboardLayoutCustomThemeSwitcher({ window }: { window?: () => Window }) {
  const router = useDemoRouter("/dashboard");
  const demoWindow = window ? window() : undefined;

  const renderContent = () => {
    switch (router.pathname) {
      case "/dashboard": return <FitnessDashboard />;
      case "/history":return <HistoryDashboard/>
      case "/achievement":return <AchievementDashboard/>
  
      default: return <Typography>Nieznana sekcja: {router.pathname}</Typography>;
    }
  };

  return (
    <DemoProvider window={demoWindow}>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
        branding={{ title: "", logo: <CustomLogo /> }}
      >
        <DashboardLayout slots={{ toolbarActions: CustomThemeSwitcher }}>
          <Box sx={{ p: 4 }}>{renderContent()}</Box>
        </DashboardLayout>
      </AppProvider>
      <GoHomeButton />
    </DemoProvider>
  );
}