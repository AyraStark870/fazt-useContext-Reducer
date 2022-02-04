import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function TaskList() {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((x) => (
          <div
            key={x.id}
            className="bg-gray-900 px-20 py-5 shadow-2x1 text-white mb-4 flex justify-between"
          >
            <div>
              <h1>{x.title}</h1>
              <p>{x.description}</p>
              <button
                onClick={() => toggleTaskDone(x.id)}
                className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2"
              >
                {tasks.done ? `undone` : `donde`}
              </button>
            </div>
            <div>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(x.id)}
              >
                Delete
              </button>
              <Link
                exact
                to={`/edit/${x.id}`}
                className="bg-gray-600 hover:bg-gary-500 py-2 px-4 mr-2"
              >
                Edite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
