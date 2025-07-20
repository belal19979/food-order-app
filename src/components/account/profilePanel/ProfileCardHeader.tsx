import { Box, Typography, Button } from "@mui/material";
import { Edit, Save, Cancel } from "@mui/icons-material";

export const ProfileCardHeader = ({
  isEditing,
  onSave,
  onCancel,
  onStartEdit,
}: {
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  onStartEdit: () => void;
}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h5">Account Details</Typography>
      {isEditing ? (
        <Box>
          <Button
            variant="contained"
            startIcon={<Save />}
            onClick={onSave}
            sx={{ mr: 1 }}
          >
            Save
          </Button>
          <Button variant="outlined" startIcon={<Cancel />} onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      ) : (
        <Button variant="outlined" startIcon={<Edit />} onClick={onStartEdit}>
          Edit
        </Button>
      )}
    </Box>
  );
};
