import {
  ADD_TASK,
  COMPLETED_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
} from "./types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

export const setCurrentTask = (payload) => {
  return {
    type: SET_CURRENT_TASK,
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const filterTasks = (payload) => {
  return {
    type: FILTER_TASKS,
    payload,
  };
};

export const completedTask = (payload) => {
  return {
    type: COMPLETED_TASK,
    payload,
  };
};
