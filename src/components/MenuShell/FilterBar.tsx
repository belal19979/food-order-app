import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack } from "@mui/material";

export function FilterBar({
  categories,
  category,
  search,
  setCategory,
  setSearch,
}: {
  categories: string[];
  category: string;
  search: string;
  setCategory: (category: string) => void;
  setSearch: (search: string) => void;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 4 }}
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: { xs: "100%", sm: 300 },
        }}
      />

      <FormControl
        variant="outlined"
        sx={{
          width: { xs: "100%", sm: 200 },
        }}
      >
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
