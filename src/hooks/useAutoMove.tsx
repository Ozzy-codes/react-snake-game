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
  const [isOutofBounds, setIsOutOfBounds] = useState(false)

  console.log("useAutoMove - current snake: ", snake)

  const switchFn = () => {
    switch (direction) {
      case "right":
        {
          const tail = snake.length - 1
          const newValue = snake[tail] + 1
          if (!boundaryRight.has(newValue)) {
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
          const tail = snake.length - 1
          const newValue = snake[tail] - 1
          if (!boundaryLeft.has(newValue)) {
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
          const tail = snake.length - 1
          const newValue = snake[tail] + 20
          if (newValue < 400) {
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
          const tail = snake.length - 1
          const newValue = snake[tail] - 20
          if (newValue > 0) {
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

  useInterval(switchFn, 500, isOutofBounds)
}
