import { TextField, Autocomplete } from "@mui/material";

type Props = {
  fullWidth?: boolean;
  autoFocus?: boolean;
};

const SearchBar: React.FC<Props> = ({
  fullWidth = false,
  autoFocus = false,
}) => {
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
            type: "search",
            autoFocus: autoFocus,
            sx: { borderRadius: 4 },
          }}
        />
      )}
    />
  );
};

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
