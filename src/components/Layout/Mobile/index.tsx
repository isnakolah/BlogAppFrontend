import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import routes from "../../../constants/routes";

const Mobile: React.FC = () => {
  const [value, setValue] = useState<string>(window.location.pathname);

  const navProps = (route: string) => {
    return { to: route, value: route, component: RouterLink };
  };

  return (
    <Paper
      elevation={3}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        value={value}
        onChange={(e, newValue) => setValue(newValue)}>
        <BottomNavigationAction
          icon={<HomeIcon />}
          {...navProps(routes.home)}
        />
        <BottomNavigationAction
          icon={<FavoriteIcon />}
          {...navProps(routes.account.view)}
        />
        <BottomNavigationAction
          icon={<LocationOnIcon />}
          {...navProps(routes.newPosts.all)}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Mobile;
