export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payLoad] };
    case "DELETE_TASK":
      return { tasks: state.tasks.filter((x) => x.id !== action.payLoad) };
    case "UPDATE_TASK":
      const updatedTask = action.payLoad;
      console.log("aca desde reducer", updatedTask);
      const updatedTasks = state.tasks.map((x) => {
        if (x.id === updatedTask.id) {
          x.title = updatedTask.title;
          x.description = updatedTask.description;
        }
        return x;
      });
      return {
        tasks: updatedTasks,
      };
    default:
      break;
  }
}
