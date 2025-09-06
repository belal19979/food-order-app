import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";

export const GenericDropDown = ({
  options,
  value,
  label,
  onChange,
}: {
  options: string[];
  value: string;
  label: string;
  onChange: (event: SelectChangeEvent) => void;
}) => {
  return (
    <Box display="flex">
      <FormControl
        variant="outlined"
        fullWidth
        sx={{
          width: { xs: "100%", sm: 250, md: 340 },
        }}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
