import { useMediaQuery, useTheme } from "@mui/material";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type Props = {
  children: React.ReactElement<any, any>;
};

const Layout: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const screenSizeIsMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <>{screenSizeIsMobile ? <Mobile>{children}</Mobile> : <Desktop />}</>;
};

export default Layout;
