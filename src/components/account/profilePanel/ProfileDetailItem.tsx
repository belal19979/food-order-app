import { Typography, Grid } from "@mui/material";

export const ProfileDetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <>
      <Grid size={{ xs: 4 }}>
        <Typography component="dt" variant="subtitle2">
          {label}
        </Typography>
      </Grid>
      <Grid size={{ xs: 8 }}>
        <Typography component="dd" variant="body1">
          {value}
        </Typography>
      </Grid>
    </>
  );
};
