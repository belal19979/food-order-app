import { Stack, Typography, Paper } from "@mui/material";

export const DeliveryNotes = ({
  recipient,
  phone,
  note,
}: {
  recipient: string;
  phone: string;
  note: string;
}) => {
  return (
    <Paper component="section" variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Delivery Info
      </Typography>

      <Stack component="dl" spacing={2}>
        <Stack component="div" direction="row" justifyContent="space-between">
          <Typography component="dt">Recipient:</Typography>
          <Typography component="dd">{recipient}</Typography>
        </Stack>

        <Stack component="div" direction="row" justifyContent="space-between">
          <Typography component="dt">Phone:</Typography>
          <Typography component="dd">{phone}</Typography>
        </Stack>

        {note && (
          <Stack component="div" direction="row" justifyContent="space-between">
            <Typography component="dt">Notes:</Typography>
            <Typography component="dd">{note}</Typography>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};
