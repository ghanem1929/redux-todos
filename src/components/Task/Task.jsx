import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  setCurrentTask,
  deleteTask,
  completedTask,
} from "../../actions/actions";
import { useDispatch } from "react-redux";
import EditTask from "../EditTask";

const Task = ({ todo: { id, description, isDone } }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <div>
          <IconButton
            id="check"
            edge="end"
            aria-label="check"
            color={isDone ? "success" : "info"}
            onClick={() => {
              dispatch(completedTask(id));
            }}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            id="edit"
            edge="end"
            aria-label="edit"
            color="inherit"
            onClick={() => {
              setOpen(true);
              dispatch(setCurrentTask({ id, description, isDone }));
            }}
          >
            <EditIcon />
          </IconButton>
          <EditTask open={open} setOpen={setOpen} />
          <IconButton
            id="delete"
            edge="end"
            aria-label="delete"
            color="error"
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <AssignmentIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={description} />
    </ListItem>
  );
};

export default Task;
