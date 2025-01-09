import { Dispatch, SetStateAction, useState } from "react"
import { useInterval } from "./useInterval"
import GameBoard from "../enum/gameboard"

const boundaryRight = new Map()
for (let i = 0; i < GameBoard.Size; i += GameBoard.RowLength) {
  boundaryRight.set(i, true)
}
const boundaryLeft = new Map()
for (let i = -1; i < GameBoard.Size; i += GameBoard.RowLength) {
  boundaryLeft.set(i, true)
}

export default function useAutoMove(snake: number[], setSnake: Dispatch<SetStateAction<number[]>>, direction: string | null) {
  const [isOutofBounds, setIsOutOfBounds] = useState(false)

  console.log("useAutoMove - current snake: ", snake)

  const switchFn = () => {
    switch (direction) {
      case "right":
        {
          console.log("moving right")
          const tail = snake.length - 1
          const newValue = snake[tail] + 1
          if (!boundaryRight.has(newValue) && !snake.includes(newValue)) {
            setSnake(snake => {
              const newArr = snake.toSpliced(0, 1)
              return [...newArr, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
      case "left":
        {
          console.log("moving left")
          const tail = snake.length - 1
          const newValue = snake[tail] - 1
          if (!boundaryLeft.has(newValue) && !snake.includes(newValue)) {
            setSnake(prev => {
              const newArr = prev.toSpliced(0, 1)
              return [...newArr, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
      case "down":
        {
          console.log("moving down")
          const tail = snake.length - 1
          const newValue = snake[tail] + GameBoard.RowLength
          if (newValue < GameBoard.Size && !snake.includes(newValue)) {
            setSnake(snake => {
              const newArr = snake.toSpliced(0, 1)
              return [...newArr, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
      case "up":
        {
          console.log("moving up")
          const tail = snake.length - 1
          const newValue = snake[tail] - GameBoard.RowLength
          if (newValue > 0 && !snake.includes(newValue)) {
            setSnake(snake => {
              const newArr = snake.toSpliced(0, 1)
              return [...newArr, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
    }
  }

  useInterval(switchFn, 300, isOutofBounds)
}
