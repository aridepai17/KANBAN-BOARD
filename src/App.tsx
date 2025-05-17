import { useEffect, useState } from "react";
import "./index.css";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { Status, statuses, Task } from "./utils/data-tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<Status | null>(null);

  const columns = statuses.map((status) => ({
    status,
    tasks: tasks.filter((task) => task.status === status),
  }));

  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks || []);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: Status) => {
    e.preventDefault();
    setCurrentlyHoveringOver(null);
    const taskId = e.dataTransfer.getData("id");
    const draggedTask = tasks.find((task) => task.id === taskId);
    if (draggedTask && draggedTask.status !== newStatus) {
      updateTask({ ...draggedTask, status: newStatus });
    }
  };

  const handleDragEnter = (status: Status) => setCurrentlyHoveringOver(status);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <h1 className="text-center text-4xl font-bold py-6 text-gray-800">
        KANBAN BOARD
      </h1>

      <div className="flex justify-center mb-6">
        <AddTaskForm addTask={addTask} />
      </div>

      <div className="flex flex-1 justify-center">
        <div className="flex divide-x w-full max-w-6xl mx-auto">
          {columns.map((column) => (
            <div
              key={column.status}
              className="flex-1"
              onDrop={(e) => handleDrop(e, column.status)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={() => handleDragEnter(column.status)}
            >
              <div className="flex justify-between items-center text-xl font-semibold text-gray-700 bg-white px-4 py-2 border-b">
                <h2 className="capitalize">{column.status}</h2>
                <span className="text-sm bg-gray-200 rounded-full px-2 py-0.5">
                  {column.tasks.reduce(
                    (total, task) => total + (task.points || 0),
                    0
                  )}{" "}
                  pts
                </span>
              </div>

              <div
                className={`min-h-[300px] p-2 ${
                  currentlyHoveringOver === column.status ? "bg-blue-100" : ""
                }`}
              >
                {column.tasks.length === 0 ? (
                  <div className="text-gray-400 italic text-center py-8">
                    No tasks
                  </div>
                ) : (
                  column.tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      updateTask={updateTask}
                      deleteTask={deleteTask}
                    />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
