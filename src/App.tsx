import { useState, } from "react"
import "./App.css"
import useUserInput from "./hooks/useUserInput"
import useAutoMove from "./hooks/useAutoMove"

const boardSize = 400
const generateRandomNumber = () => {
  return Math.floor(Math.random() * boardSize)
}

function App() {
  const [snake, setSnake] = useState([0])
  const [food, setFood] = useState(190)
  const [direction, setDirection] = useState("right")
  useUserInput(setDirection)
  useAutoMove(snake, setSnake, direction)

  //  TODO: how to randomly add food to the content, while ensuring it wont be on the snake
  const content = () => {
    const list = new Array(boardSize)
    for (let i = 0; i < list.length; i++) {
      let divStyle

      if (snake.includes(food)) {
        let potentialFood
        do {
          potentialFood = generateRandomNumber()
        } while (snake.includes(potentialFood))
        setFood(potentialFood)
      } else if (i === food) {
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
