import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";

export default function TaskForm() {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);

  const { id } = useParams();
  let navigate = useNavigate();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  const handleChange = ({ target }) => {
    setTask({
      ...task,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/", { replace: true });
  };
  useEffect(() => {
    const taskFound = tasks.find((x) => x.id === id);
    if (taskFound) {
      setTask(taskFound);
    }
  }, [id, tasks]);

  return (
    <div className="flex justify-center items-center h-3/4 ">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
        <h2 className="mb-7 text-3x1">
          {task.id ? `Editing A Task` : `Creating A Task`}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="write a title"
            onChange={handleChange}
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            name="description"
            rows="2"
            placeholder="write a description"
            onChange={handleChange}
            value={task.description}
          >
            {" "}
          </textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5"
        >
          {task.id ? `Edit Task` : `Creat a Task`}
        </button>
      </form>
    </div>
  );
}
