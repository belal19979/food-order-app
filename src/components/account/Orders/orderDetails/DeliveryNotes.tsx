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
    <Paper component="section" variant="outlined" sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Delivery Info:
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Typography>Recipient: </Typography>
        <Typography> {recipient} </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography> Phone: </Typography>
        <Typography>{phone} </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography> Notes: </Typography>
        <Typography> {note ? note : ""} </Typography>
      </Stack>
    </Paper>
  );
};
