import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";

import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
            </Routes>
            <Routes>
              <Route path="/add" element={<TaskForm />} />
            </Routes>
            <Routes>
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
