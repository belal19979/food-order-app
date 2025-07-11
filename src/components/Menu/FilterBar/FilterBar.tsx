import { SelectChangeEvent, TextField, Grid, Box } from "@mui/material";
import { CategoryDropDown } from "./CategoryDropDown";

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
    <Grid container component="section" sx={{ width: "100%", mb: 4 }}>
      <Grid size={{ xs: 12, sm: 6, md: 8 }}>
        <Box display="flex">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: { xs: "100%", sm: 250, md: 340 },
              mb: { xs: 3 },
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CategoryDropDown
          categories={categories}
          category={category}
          handleChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
