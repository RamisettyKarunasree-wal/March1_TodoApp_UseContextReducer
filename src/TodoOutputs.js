import TodoContext from "./TodoContext";
import { useContext } from "react";
const TodoOutputs = () => {
  const values = useContext(TodoContext);
  return (
    <div className="outputItem">
      <table>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th></th>
        </tr>

        {values.todoArr.map((value, index) => {
          return (
            <tr>
              <td>{value.title} </td>
              <td>{value.status} </td>
              <td>
                <button
                  onClick={() => {
                    values.dispatch({ type: "removeTodo", ind: index });
                  }}
                >
                  Remove Todo
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default TodoOutputs;
