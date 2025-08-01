import { Box, Stack, Typography } from "@mui/material";
export const OrderDetailsHeader = ({
  id,
  createdAt,
}: {
  id: string;
  createdAt: string;
}) => {
  return (
    <Box component="header" mb={4}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Order #{id.slice(-6)} </Typography>
        <Typography>{createdAt} </Typography>
      </Stack>
    </Box>
  );
};
