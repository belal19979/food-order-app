import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export type GenericDropDownProps<T extends string> = {
  options: readonly T[];
  value: T | "";
  label: string;
  onChange: (value: T | "") => void;
  getLabel?: (opt: T) => string;
  includeAll?: boolean;
};

export const GenericDropDown = <T extends string>({
  options,
  value,
  label,
  getLabel,
  onChange,
  includeAll = true,
}: GenericDropDownProps<T>) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value as T | "");
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{
        width: { xs: "100%", sm: 200, md: 200 },
      }}
    >
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {includeAll && (
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
        )}

        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {getLabel ? getLabel(opt) : opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
