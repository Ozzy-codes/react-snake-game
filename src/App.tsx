import { useEffect, useState } from 'react'
import './App.css'

const boundaryRight = new Map()
boundaryRight.set(10, true)

function App() {
  const [snake, setSnake] = useState([0])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const tail = snake.length - 1
      const newValue = ++snake[tail]
      // console.log("snake: ", snake)
      snake.splice(0, 1)
      if (!boundaryRight.has(newValue)) {
        setSnake([...snake, newValue])
      }
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [snake])

  const content = () => {
    const list = new Array(10)
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
