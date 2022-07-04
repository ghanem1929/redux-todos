import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { addTask } from "../../actions/actions";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    if (text) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        description: text,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setText("");
      setOpen(false);
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        onClick={handleOpen}
        endIcon={<AddTaskIcon />}
      >
        add a new task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adding task
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned"
              label="Task"
              size="small"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="contained" size="medium" onClick={handleSubmit}>
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTask;
