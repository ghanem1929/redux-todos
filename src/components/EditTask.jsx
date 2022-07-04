import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { editTask } from "../actions/actions";
import { style } from "./AddTask/AddTask";

const EditTask = ({ setOpen, open }) => {
  const current = useSelector((state) => state.current);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (current) {
      setText(current.description);
    }
  }, [current]);

  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    const updTask = {
      id: current.id,
      description: text,
    };
    dispatch(editTask(updTask));
    setOpen(false);
  };

  return (
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
          <Button variant="outlined" size="medium" onClick={handleClose}>
            CANCEL
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTask;
