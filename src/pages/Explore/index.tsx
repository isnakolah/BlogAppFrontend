import { useState } from "react";
import { Chip, Box, Grid, IconButton, styled, Tabs, Tab } from "@mui/material";
import SearchBar from "./../../components/SearchBar/index";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

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
      {...other}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  return (
    <>
      <Grid container justifyContent="flex-end" sx={{ mt: "0.7rem" }}>
        <Grid item xs={8}>
          <SearchBar fullWidth />
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton>
            <AddCircleRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
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
      <Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "58px",
            width: "100%",
          }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="search result options">
            <Tab label="Articles" {...a11yProps(0)} />
            <Tab label="Authors" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          A list of articles
        </TabPanel>
        <TabPanel value={value} index={1}>
          A list of authors
        </TabPanel>
      </Box>
    </>
  );
};

export default Explore;
