import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   Counter App: {count}
    <button onClick={() => setCount((count) => count + 1)}>+</button>
    <button onClick={() => setCount((count) => count - 1)}>-</button>
     <button onClick={() => setCount(0)}>reset</button>

         <button onClick={() => setCount((count) => count + 5)}>Plus 5</button>
    <button onClick={() => setCount((count) => count - 5)}>Minus 5</button>
    </>
  )
}

export default App
