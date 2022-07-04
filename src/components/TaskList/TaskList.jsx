import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { filterTasks } from "../../actions/actions";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{ flexGrow: 1, maxWidth: 752 }}
      style={{
        width: "100%",
        padding: 20,
      }}
    >
      {/* <FormGroup row> */}
      <Grid container>
        <Grid Item md={3}>
          <FormControlLabel
            control={
              <Button
                variant="outlined"
                style={{ border: "none" }}
                size="medium"
                onClick={() => {
                  dispatch(filterTasks("all"));
                }}
                endIcon={<FormatListBulletedIcon />}
              >
                All tasks
              </Button>
            }
          />
        </Grid>
        <Grid Item md={3}>
          <FormControlLabel
            control={
              <Button
                variant="outlined"
                style={{ border: "none" }}
                size="medium"
                onClick={() => {
                  dispatch(filterTasks("done"));
                }}
                endIcon={<TaskAltIcon />}
              >
                Done
              </Button>
            }
          />
        </Grid>
        <Grid Item md={3}>
          <FormControlLabel
            control={
              <Button
                variant="outlined"
                style={{ border: "none" }}
                size="medium"
                onClick={() => {
                  dispatch(filterTasks("not"));
                }}
                endIcon={<CancelIcon />}
              >
                not yet
              </Button>
            }
          />
        </Grid>
      </Grid>
      {/* 
      </FormGroup> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            <List
              dense
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {todos.map((todo) => (
                <Task todo={todo} key={todo.id} />
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskList;
