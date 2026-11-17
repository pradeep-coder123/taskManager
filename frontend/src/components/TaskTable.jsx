
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  Chip,
  IconButton,
} from "@mui/material";

import {
  Edit,
  Download,
  Delete,
  CheckCircle,
} from "@mui/icons-material";

import { formatDate, getStatus } from "../utils";

const TaskTable = ({
  tasks,
  onMarkAsDone,
  onDownloadFile,
  onEdit,
  onDelete,
}) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "22px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Deadline</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell>
                <Tooltip title={task.title}>
                  <span
                    style={{
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {task.title}
                  </span>
                </Tooltip>
              </TableCell>

              <TableCell sx={{ maxWidth: 250, overflow: "hidden" }}>
                <Tooltip title={task.description}>
                  <span
                    style={{
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {task.description}
                  </span>
                </Tooltip>
              </TableCell>

              <TableCell>
                {formatDate(task.deadline)}
                <br />
                <code>{getStatus(task.deadline, task.status)}</code>
              </TableCell>

              <TableCell>
                <Chip
                  label={task.status}
                  color={task.status === "DONE" ? "success" : "warning"}
                  size="small"
                />
              </TableCell>

              <TableCell>
                {task.status === "TODO" && (
                  <Tooltip title="Mark as Done">
                    <IconButton
                      color="success"
                      onClick={() => onMarkAsDone(task._id)}
                    >
                      <CheckCircle />
                    </IconButton>
                  </Tooltip>
                )}

                {task.linkedFile && (
                  <Tooltip title="Download">
                    <IconButton
                      color="primary"
                      onClick={() =>
                        onDownloadFile(
                          new Uint8Array(task.linkedFile.data.data),
                          task.linkedFile.contentType
                        )
                      }
                    >
                      <Download />
                    </IconButton>
                  </Tooltip>
                )}

                <Tooltip title="Edit">
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(task)}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton
                    color="error"
                    onClick={() => onDelete(task._id)}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
