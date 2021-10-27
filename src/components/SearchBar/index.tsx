import { TextField, Autocomplete } from "@mui/material";
import { forwardRef } from "react";

type Props = {
  fullWidth?: boolean;
  autoFocus?: boolean;
  ref: any;
};

const SearchBar: React.FC<Props> = forwardRef(
  ({ fullWidth = false, autoFocus = false }, ref) => {
    return (
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth={fullWidth}
            size="small"
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              ...params.InputProps,
              ref: ref,
              type: "search",
              autoFocus: autoFocus,
              sx: { borderRadius: 5, pl: "18px !important" },
            }}
          />
        )}
      />
    );
  }
);

export default SearchBar;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
