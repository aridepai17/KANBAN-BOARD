import { Task } from '../utils/data-tasks'
import '../index.css'

interface TaskCardProps {
  task: Task
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
}

function TaskCard({ task, updateTask, deleteTask }: TaskCardProps) {
  const FIB_POINTS = [1, 2, 3, 5, 8, 13, 21]

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('id', task.id)
  }

  const handleIncreasePoints = () => {
    const points = task.points ?? 1;
    const i = FIB_POINTS.indexOf(points);
    if (i !== -1 && i < FIB_POINTS.length - 1) {
      updateTask({ ...task, points: FIB_POINTS[i + 1] });
    }
  }
  
  const handleDecreasePoints = () => {
    const points = task.points ?? 1;
    const i = FIB_POINTS.indexOf(points);
    if (i > 0) {
      updateTask({ ...task, points: FIB_POINTS[i - 1] });
    }
  }
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'bg-green-600'
      case 'medium':
        return 'bg-yellow-500'
      case 'high':
        return 'bg-red-600'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="border bg-black text-white p-4 mb-4 rounded-md shadow-lg cursor-move transition-transform duration-150 hover:scale-[1.01]"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-bold mb-2">{task.title}</h3>

          <div className="flex items-center gap-3 text-sm mb-2">
            <button
              onClick={handleDecreasePoints}
              className="bg-gray-700 px-2 rounded hover:bg-gray-600"
              title="Decrease"
            >
            -
            </button>
            <span>{task.points} pts</span>
            <button
              onClick={handleIncreasePoints}
              className="bg-gray-700 px-2 rounded hover:bg-gray-600"
              title="Increase"
            >
            +
            </button>
          </div>

          <span
            className={`inline-block px-2 py-1 text-xs rounded-full text-white ${getPriorityColor(
              task.priority
            )}`}
          >
            Priority: {task.priority}
          </span>
        </div>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700 text-lg"
          title="Delete Task"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default TaskCard
