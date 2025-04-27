import './App.css'

function App() {
  const title = "Do Market Research"
  const id = "Bus - 1"
  const points = 5
  

  return (
    <div className = "text-4xl border rounded-lg px-2 m-2 bg-gray-50">
      <div className = "text-base font-bold py-2">
        {title}
      </div>
      <div className='flex-gap-4 justify-between py-2 text-gray-700'>
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  )
}

export default App
