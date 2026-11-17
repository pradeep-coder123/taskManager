
import { useRef } from "react";
import { Button, IconButton } from "@mui/material";

import UploadIcon from "@mui/icons-material/Upload";
import { Delete } from "@mui/icons-material";

const FileUpload = ({ file, handleFileChange }) => {
  const inputRef = useRef(null);

  const handleRemove = () => {
    inputRef.current.value = "";
    handleFileChange({ target: { files: [] } });
  };

  return (
    <>
      <input
        ref={inputRef}
        accept="application/pdf"
        style={{ display: "none" }}
        id="upload-file"
        type="file"
        onChange={handleFileChange}
      />

      <label htmlFor="upload-file">
        <Button
          variant="contained"
          component="span"
          startIcon={<UploadIcon />}
          style={{ marginTop: 16, marginRight: 16 }}
        >
          {file ? file.name : "Upload PDF"}
        </Button>
      </label>

      {file && (
        <IconButton color="error" onClick={handleRemove}>
          <Delete />
        </IconButton>
      )}
    </>
  );
};

export default FileUpload;
