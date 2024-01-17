import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const increment = (by = 1) => setCount(prevState => prevState += by)
  const decrement = (by = 1) => setCount(prevState => prevState -= by)

  const handleChange = (event) => setCount(Number(event.target.value)) 

  return (
    <>
      <div>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button className='bg-green' onClick={() => decrement(10)}>-10</button>
        <button className='bg-yellow' onClick={() => decrement()}>-1</button>

        <input type="number" value={count} onChange={handleChange}/>
        
        <button className='bg-yellow' onClick={() => increment()}>+1</button>
        <button className='bg-green' onClick={() => increment(10)}>+10</button>
      </div>
    </>
  )
}

export default App
