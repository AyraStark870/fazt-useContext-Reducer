import React from "react";

import { Link, NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

export default function Heading() {
  return (
    <div>
      <div className="flex item-center mb-10">
        <NavLink exact to="/">
          <h5 className="text-gray-100 font-bold text-2x1">Task App</h5>
        </NavLink>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <NavLink exact to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <IoMdAdd /> Add Task
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
