import { Stack, Box, Typography } from "@mui/material";
import { ActionButtons } from "../MenuItemDetail/ActionButtons";
import Image from "next/image";

export const CartItemRow = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Box>
        <Image src="/" alt="" width="350" height="350" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex={1}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column" gap={2}>
            <Typography variant="h6">classic burger</Typography>
            <Typography variant="body2">
              description,description,description,description,description{" "}
            </Typography>
          </Stack>
          <Typography variant="h5">$10,99</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">unit price </Typography>
          <ActionButtons slug="hi" />
        </Stack>
      </Box>
    </Stack>
  );
};
