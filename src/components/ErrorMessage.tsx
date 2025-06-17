import { Alert, AlertTitle } from "@mui/material";

export function ErrorMessage({ message }: { message: string }) {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
}
