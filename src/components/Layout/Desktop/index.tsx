import React from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";

const Desktop: React.FC = () => {
  const theme = useTheme();
  const screenSizeIsNotMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {screenSizeIsNotMobile && (
        <AppBar position="fixed">
          <Toolbar>
            <div>This is the toolbar</div>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Desktop;
