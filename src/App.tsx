import './App.css'
import TaskCard from './task-card'

function App() {
  const title = "Do Market Research"
  const id = "Bus - 1"
  const points = 5

  return (
    <>
      <TaskCard title={title} id={id} points={points} />
      <TaskCard title = "Competitor Analysis" id = "Bus - 2" points = {3} />
      <TaskCard title = "Customer Interviews" id = "Bus - 3" points = {8} />
      <TaskCard title = "User Testing" id = "Bus - 4" points = {2} />
    </>
  )
}

export default App
