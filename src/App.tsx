import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div style={{ display: 'flex', gap: 15 }}>
        <Link to={'about'}>about</Link>
        <Link to={'welcome'}>welcome</Link>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
