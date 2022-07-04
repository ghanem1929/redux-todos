import {
  ADD_TASK,
  COMPLETED_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
} from "../actions/types";

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case SET_CURRENT_TASK:
      return { ...state, current: payload };

    case FILTER_TASKS:
      return {
        ...state,
        todos:
          payload === "all"
            ? state.todos
            : payload === "done"
            ? state.todos.filter((todo) => todo.isDone === true)
            : state.todos.filter((todo) => todo.isDone === false),
      };

    default:
      return state;
  }
};
