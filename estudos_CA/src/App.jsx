import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
        <button onClick={() => setCount1((count1) => count1 + 1)} style={{width: count1 > 10 ? "200px" : "", height: count1 > 10 ? "50px" : ""}  }>
          count is {count1}
        </button>
        <button onClick ={()=> setCount2((count2)=> count2 -1)} style={{backgroundColor: count2 < -10 ?  "red":"blue"}}>
          count is {count2}
        </button>
    </>
  )
}

export default App
