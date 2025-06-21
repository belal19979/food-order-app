import { Box, Button, CardActions, Typography } from "@mui/material";

export const FoodCardActions = ({ price }: { price: number }) => {
  return (
    <CardActions>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="body2" color="primary">
          ${price}
        </Typography>
        <Button
          size="small"
          sx={{
            border: "1px solid",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          Add
        </Button>
      </Box>
    </CardActions>
  );
};
