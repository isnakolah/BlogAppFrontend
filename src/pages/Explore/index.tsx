import { useState, createRef } from "react";
import {
  Fab,
  Tab,
  Box,
  Chip,
  Grid,
  Tabs,
  Slide,
  AppBar,
  styled,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import SearchBar from "./../../components/SearchBar/index";
import SearchIcon from "@mui/icons-material/Search";
import BlogPostCard from "./../../components/BlogPostCard/index";
// import ReactDOM from "react-dom";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ maxHeight: "calc(100vh -   104px)" }}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

interface ChipData {
  id: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  marginLeft: theme.spacing(0.4),
  marginRight: theme.spacing(0.4),
}));

const Explore: React.FC = () => {
  const [value, setValue] = useState(0);
  const searchRef = createRef<HTMLDivElement>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const trigger = useScrollTrigger();

  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { id: 0, label: "Angular" },
    { id: 1, label: "jQuery" },
    { id: 2, label: "Polymer" },
    { id: 3, label: "React" },
    { id: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
  };

  const handleSearchButtonClick = () => {
    if (searchRef !== null) {
      // ReactDOM.findDOMNode(searchRef?.current).focus();
      console.log(searchRef.current);
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Grid
          container
          justifyContent="center"
          component={Toolbar}
          sx={{ backgroundColor: "#fff", zIndex: 1 }}>
          <Grid item xs={8}>
            <SearchBar fullWidth ref={searchRef} />
          </Grid>
        </Grid>
      </AppBar>
      <Slide
        appear={false}
        direction="down"
        in={trigger}
        easing={{ exit: "easing.easeOut" }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
          <Box
            sx={{
              m: 0,
              p: "0.7rem",
              display: "flex",
              overflow: "auto",
              listStyle: "none",
            }}
            component="ul">
            {chipData.map((data) => (
              <ListItem key={data.id}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  color="info"
                />
              </ListItem>
            ))}
          </Box>
        </AppBar>
      </Slide>
      <Box>
        <Grid
          container
          sx={{
            position: "fixed",
            bottom: 56,
            width: "100%",
            zIndex: 1,
            backgroundColor: "#ffffffde",
          }}>
          <Grid item xs={10}>
            <Tabs
              centered
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="explore options">
              <Tab label="Articles" {...a11yProps(0)} />
              <Tab label="Authors" {...a11yProps(1)} />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: 2,
            }}>
            <Fab
              size="small"
              color="primary"
              aria-label="search"
              onClick={handleSearchButtonClick}>
              <SearchIcon />
            </Fab>
          </Grid>
        </Grid>
        <TabPanel value={value} index={0}>
          <Toolbar />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <Toolbar />
          <Toolbar />
        </TabPanel>
        <TabPanel value={value} index={1}>
          A list of authors
        </TabPanel>
      </Box>
    </>
  );
};

export default Explore;
