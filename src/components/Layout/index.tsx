import { useMediaQuery, useTheme } from "@mui/material";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Layout: React.FC = () => {
  const theme = useTheme();
  const screenSizeIsMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <>{screenSizeIsMobile ? <Mobile /> : <Desktop />}</>;
};

export default Layout;
