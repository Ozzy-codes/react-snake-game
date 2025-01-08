import { useState, } from "react"
import "./App.css"
import useUserInput from "./hooks/useUserInput"
import useAutoMove from "./hooks/useAutoMove"
import GameBoard from "./enum/gameboard"

const generateRandomSpace = () => {
  return Math.floor(Math.random() * GameBoard.Size)
}

//  BUG: if the user is quick enough you can have the snake eat itself if the user hits "up, left" -> "up, right" || "down, left" -> "down,right" or any combination that includes a perpendicular direction first.
function App() {
  const [snake, setSnake] = useState([0])
  const [food, setFood] = useState(190)
  const [direction, setDirection] = useState("right")
  useUserInput(setDirection)
  useAutoMove(snake, setSnake, direction)

  if (snake.includes(food)) {
    let potentialFood
    do {
      potentialFood = generateRandomSpace()
    } while (snake.includes(potentialFood))
    setSnake(prev => {
      return [...prev, food]
    })
    setFood(() => potentialFood)
  }

  const content = () => {
    const list = new Array(GameBoard.Size)
    for (let i = 0; i < list.length; i++) {
      let divStyle
      if (i === food) {
        divStyle = "space food"
      } else if (snake.includes(i)) {
        divStyle = "space snake"
      } else divStyle = "space"

      list[i] = (<div key={i} className={divStyle}></div>)
    }
    return list
  }

  return (
    <>
      <div className="topLvl">
        {content()}
      </div>
    </>
  )
}

export default App
