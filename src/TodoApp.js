import { useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";
import TodoButtons from "./TodoButtons";
import TodoOutputs from "./TodoOutputs";
import TodoContext from "./TodoContext";
const TodoApp = () => {
  const initialValues = [];
  const [todoArr, dispatch] = useReducer(TodoReducer,initialValues);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const reducerValues = { todoArr, dispatch, todoTitle, todoStatus };
  return (
    <div>
        <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
        <select
          name="status"
          onChange={(e) => {
            setTodoStatus(e.target.value);
          }}
        >
          <option value="Completed">Completed</option>
          <option value="InCompleted">InCompleted</option>
        </select>
      </div>
      <TodoContext.Provider value={reducerValues}>
        <TodoButtons />
        <TodoOutputs />
      </TodoContext.Provider>
    </div>
  );
};
export default TodoApp;
