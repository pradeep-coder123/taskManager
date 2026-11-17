import React from "react";
import {
  Modal,
  TextField,
  Button,
  Box,
} from "@mui/material";

import { formatDateForInput } from "../utils";
import FileUpload from "./FileUpload";

const TaskModal = ({
  open,
  handleClose,
  taskData,
  handleChange,
  handleSave,
  handleFileChange,
  file,
  isEditing,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 450 },
          maxWidth: 450,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          outline: "none", // Removes the double black outline border seen in your screenshot
        }}
      >
        <TextField
          label="Title"
          fullWidth
          required
          margin="normal"
          value={taskData?.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <TextField
          label="Description"
          fullWidth
          required
          margin="normal"
          value={taskData?.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <TextField
          label="Deadline"
          type="date"
          fullWidth
          required
          margin="normal"
          // Use slotProps for MUI v6+, keep InputLabelProps for MUI v5 compatibility
          slotProps={{ inputLabel: { shrink: true } }}
          InputLabelProps={{ shrink: true }}
          value={formatDateForInput(taskData?.deadline || "")}
          onChange={(e) => handleChange("deadline", e.target.value)}
        />

        {!isEditing && (
          <Box sx={{ mt: 2, mb: 1, width: "100%", display: "block" }}>
            <FileUpload
              file={file}
              handleFileChange={handleFileChange}
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            clear: "both", // Prevents floating elements in FileUpload from squishing these buttons
            mt: 3,
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>

          <Button variant="contained" color="primary" onClick={handleSave}>
            {isEditing ? "Update" : "Save"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;