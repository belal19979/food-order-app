import { Box, Paper, Typography, Button, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const ProfilePanel = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" mb={3}>
        ProfilePanel
      </Typography>
      <Paper
        variant="outlined"
        sx={{ borderRadius: 2, p: 4, maxWidth: 600, mx: "auto" }}
      >
        {/* 4️⃣ Header with disabled “Edit” button stub */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Account Details</Typography>
          <Button variant="outlined" startIcon={<EditIcon />} disabled>
            Edit
          </Button>
        </Box>
        {/* 5️⃣ Semantic definition list via Grid */}
        <Box component="dl" mt={2}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 4 }}>
              <Typography component="dt" variant="subtitle2">
                Name
              </Typography>
            </Grid>
            <Grid size={{ xs: 8 }}>
              <Typography component="dd" variant="body1">
                Mo
              </Typography>
            </Grid>

            <Grid size={{ xs: 4 }}>
              <Typography component="dt" variant="subtitle2">
                Email
              </Typography>
            </Grid>
            <Grid size={{ xs: 8 }}>
              <Typography component="dd" variant="body1">
                Mo@gnail.xom
              </Typography>
            </Grid>

            <Grid size={{ xs: 4 }}>
              <Typography component="dt" variant="subtitle2">
                Member Since
              </Typography>
            </Grid>
            <Grid size={{ xs: 8 }}>
              <Typography component="dd" variant="body1">
                22/2/2222
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
