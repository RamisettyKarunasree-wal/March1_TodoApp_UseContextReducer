import { useContext } from "react";
import TodoContext from "./TodoContext";
const TodoButtons = () => {
  const reducerValue = useContext(TodoContext);
  return (
    <div>
      <button
        className="prime_btn"
        onClick={() => {
          reducerValue.dispatch({
            type: "add",
            obj: {
              title: reducerValue.todoTitle,
              status: reducerValue.todoStatus,
            },
          });
        }}
      >
        Add Todo
      </button>
      <button
        className="del_btn"
        onClick={() => {
          reducerValue.dispatch({ type: "removeAll" });
        }}
      >
        Clear All
      </button>
    </div>
  );
};
export default TodoButtons;
