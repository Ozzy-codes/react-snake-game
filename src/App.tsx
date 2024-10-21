import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [snake, setSnake] = useState([0])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const tail = snake.length - 1
      const newValue = ++snake[tail]
      snake.splice(0, 1)
      setSnake([...snake, newValue])
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [snake])

  const content = () => {
    const list = new Array(10)
    for (let i = 0; i < list.length; i++) {
      const isSnake = snake.includes(i) ? 'blankSpace snake' : 'blankSpace'
      list[i] = (<div key={i} className={isSnake}></div>)
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
