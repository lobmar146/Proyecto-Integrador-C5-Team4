import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
