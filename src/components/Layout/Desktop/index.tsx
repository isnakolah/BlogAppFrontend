import React from "react";
import { AppBar, Toolbar, Grid } from "@mui/material";

type Props = {
  children: React.ReactElement<any, any>;
};

const Desktop: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div>This is the toolbar</div>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center">
        <Grid item sx={{ maxWidth: 700 }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Desktop;
