import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useHistory } from "react-router-dom";
import routes from "../../../constants/routes";

const Layout: React.FC = () => {
  const history = useHistory();
  const [value, setValue] = useState<string>(routes.home);

  const handleOnPageChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <Paper
      elevation={3}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleOnPageChange}>
        <BottomNavigationAction
          label="Recents"
          value={routes.account.view}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value={routes.home}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value={routes.newPosts.all}
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Layout;
