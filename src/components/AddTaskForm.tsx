import { useState } from "react";
import { Status, Task } from "../utils/data-tasks";
import { v4 as uuidv4 } from "uuid";

interface AddTaskFormProps {
  addTask: (task: Task) => void;
}

function AddTaskForm({ addTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(1);
  const [status, setStatus] = useState<Status>("todo");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask: Task = {
      id: uuidv4(),
      title: title.trim(),
      points,
      status,
      priority,
    };
    addTask(newTask);
    setTitle("");
    setPoints(1);
    setStatus("todo");
    setPriority("medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3 bg-black text-white p-4 border border-white shadow-[4px_4px_0px_#222] mb-6"
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-2 py-1 text-xs border-2 border-white bg-black text-white shadow-[2px_2px_0px_#222] w-48 font-press-start placeholder:text-gray-400"
        required
      />
      <select
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
        className="px-2 py-1 text-xs border-2 border-white bg-black text-white shadow-[2px_2px_0px_#222] font-press-start"
      >
        {[1, 2, 3, 5, 8, 13, 21].map((pt) => (
          <option key={pt} value={pt}>
            {pt} pts
          </option>
        ))}
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Status)}
        className="px-2 py-1 text-xs border-2 border-white bg-black text-white shadow-[2px_2px_0px_#222] font-press-start"
      >
        {(["todo", "in-progress", "done"] as Status[]).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value as "low" | "medium" | "high")
        }
        className="px-2 py-1 text-xs border-2 border-white bg-black text-white shadow-[2px_2px_0px_#222] font-press-start"
      >
        {(["low", "medium", "high"] as const).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="px-3 py-1 text-xs font-press-start border-2 border-white bg-blue-600 hover:bg-blue-500 text-white shadow-[2px_2px_0px_#222] active:translate-y-[2px] active:shadow-none"
      >
        + ADD
      </button>
    </form>
  );
}

export default AddTaskForm;
