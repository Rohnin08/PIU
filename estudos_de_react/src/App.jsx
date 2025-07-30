import { useState } from 'react'
import './App.css'
import Contadores from './components/Contadores'
import Semaforo from './components/Semaforo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Contadores></Contadores>
    <Semaforo></Semaforo>
    </>
  )
}

export default App
