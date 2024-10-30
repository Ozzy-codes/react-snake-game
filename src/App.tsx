import { useState, } from 'react'
import './App.css'
import useUserInput from './hooks/useUserInput'
import useAutoMove from './hooks/useAutoMove'

function App() {
  const [snake, setSnake] = useState([0])
  const [direction, setDirection] = useState("right")
  useUserInput(setDirection)
  useAutoMove(snake, setSnake, direction)


  const content = () => {
    const list = new Array(40)
    for (let i = 0; i < list.length; i++) {
      const divStyle = snake.includes(i) ? 'blankSpace snake' : 'blankSpace'
      list[i] = (<div key={i} className={divStyle}></div>)
    }
    return list
  }

  return (
    <>
      <div className='topLvl'>
        {content()}
      </div>
    </>
  )
}

export default App
