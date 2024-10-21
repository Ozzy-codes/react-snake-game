import { useEffect, useState, useCallback } from 'react'
import './App.css'
import moveRight from './model/moveSnake/right'
// import moveDown from './model/moveSnake/down'

function App() {
  const [snake, setSnake] = useState([0])
  const effect = useCallback(() => moveRight(snake, setSnake), [snake])

  useEffect(effect, [effect])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          console.log('down arrow pressed');
          break;
        case "ArrowUp":
          console.log('up arrow pressed');
          break;
        case "ArrowLeft":
          console.log('left arrow pressed');
          break;
        case "ArrowRight":
          console.log('right arrow pressed');
          break;
        default: break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

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
