import { Dispatch, SetStateAction, useState } from "react"
import { useInterval } from "./useInterval"

const boundaryRight = new Map()
for (let i = 0; i < 400; i += 20) {
  boundaryRight.set(i, true)
}
const boundaryLeft = new Map()
for (let i = -1; i < 400; i += 20) {
  boundaryLeft.set(i, true)
}

export default function useAutoMove(snake: number[], setSnake: Dispatch<SetStateAction<number[]>>, direction: string) {
  console.log("useAutoMove called")
  const [isOutofBounds, setIsOutOfBounds] = useState(false)

  const switchFn = () => {
    switch (direction) {
      case "right":
        console.log("snake moving right: ", snake)
        {
          const tail = snake.length - 1
          const newValue = ++snake[tail]
          if (!boundaryRight.has(newValue)) {
            setSnake(snake => {
              snake.splice(0, 1)
              return [...snake, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
      case "left":
        console.log("snake moving left: ", snake)
        {
          const tail = snake.length - 1
          const newValue = --snake[tail]
          if (!boundaryLeft.has(newValue)) {
            setSnake(snake => {
              snake.splice(0, 1)
              return [...snake, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
      case "down":
        console.log("snake in moveDown: ", snake)
        {
          const tail = snake.length - 1
          const newValue = snake[tail] + 20
          if (newValue < 400) {
            setSnake(snake => {
              snake.splice(0, 1)
              return [...snake, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
      case "up":
        console.log("snake moving up: ", snake)
        {
          const tail = snake.length - 1
          const newValue = snake[tail] - 20
          if (newValue > 0) {
            setSnake(snake => {
              snake.splice(0, 1)
              return [...snake, newValue]
            })
          } else {
            setIsOutOfBounds(true)
            setSnake([0])
          }
        }
        break;
    }
  }

  useInterval(switchFn, 500, isOutofBounds)
}
