import {
  Grid,
  Badge,
  AppBar,
  Toolbar,
  useTheme,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import BlogPostCard from "../../components/BlogPostCard";

const Home = () => {
  const theme = useTheme();
  const screenSizeIsMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {screenSizeIsMobile && (
        <>
          <AppBar position="fixed">
            <Toolbar component={Grid} justifyContent="space-between">
              <Typography variant="subtitle2">BLOG APP</Typography>
              <IconButton>
                <Badge badgeContent={12} color="error">
                  <ForumIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </>
      )}
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
    </>
  );
};

export default Home;
