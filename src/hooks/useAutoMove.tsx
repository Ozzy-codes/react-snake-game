import { Dispatch, SetStateAction, useState } from "react"
import { useInterval } from "./useInterval"

const boundaryRight = new Map()
for (let i = 0; i < 400; i += 20) {
  boundaryRight.set(i, true)
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
    }
  }

  useInterval(switchFn, 500, isOutofBounds)
}
