import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Desktop: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div>This is the toolbar</div>
      </Toolbar>
    </AppBar>
  );
};

export default Desktop;
