import { useState } from "react";
import { Chip, Box, Grid, IconButton, styled } from "@mui/material";
import SearchBar from "./../../components/SearchBar/index";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

interface ChipData {
  id: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  marginLeft: theme.spacing(0.4),
  marginRight: theme.spacing(0.4),
}));

const Explore: React.FC = () => {
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
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        sx={{ mt: "0.7rem" }}>
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
          display: "flex",
          overflow: "auto",
          listStyle: "none",
          m: 0,
          p: "0.7rem",
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
    </>
  );
};

export default Explore;
