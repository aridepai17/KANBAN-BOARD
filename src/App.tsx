import './App.css'
import  TaskCard from './task-card'
import  { Task } from './data-tasks'

export type Task = {
  title: string,
  id: string,
  points?: number
}

function App() {
  const task: Task = {
    title: "Task 1",
    id: "1",
    points: 5
  }

  return (
    <>
      <TaskCard task = {task} />
    </>
  )
}

export default App
