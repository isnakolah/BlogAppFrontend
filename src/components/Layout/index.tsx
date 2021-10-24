import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Layout: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleOnPageChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(+newValue);
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleOnPageChange}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Layout;
