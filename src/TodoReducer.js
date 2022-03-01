const TodoReducer = (state, action) => {
  if (action.type == "add") {
    return [...state, action.obj];
  }
  if (action.type == "removeAll") {
    return [];
  }
  if (action.type == "removeTodo") {
    if (state.length == 1) {
      return [];
    } else {
      let modifiedState = state.filter((val, index) => {
        if (index == action.ind) {
          return false;
        } else {
          return true;
        }
      });
      return modifiedState;
    }
  }
};
export default TodoReducer;
