import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Home = () => {
  const theme = useTheme();
  const screenSizeIsMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {screenSizeIsMobile && (
        <AppBar position="fixed">
          <Toolbar component={Grid} justifyContent="space-between">
            <Typography variant="subtitle2">BLOG APP</Typography>
            <IconButton>
              <ForumIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Home;
