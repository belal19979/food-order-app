import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";

export const CategoryDropDown = ({
  categories,
  category,
  handleChange,
}: {
  categories: string[];
  category: string;
  handleChange: (event: SelectChangeEvent) => void;
}) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <FormControl
        variant="outlined"
        fullWidth
        sx={{
          width: { xs: "100%", sm: 250, md: 340 },
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
    </Box>
  );
};
