import { Dispatch, SetStateAction } from "react"
import { useInterval } from "./useInterval"

const boundaryRight = new Map()
for (let i = 0; i < 50; i += 10) {
  boundaryRight.set(i, true)
}

export default function useAutoMove(snake: number[], setSnake: Dispatch<SetStateAction<number[]>>, direction: string) {

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
          }
        }
        break;
      case "down":
        console.log("snake in moveDown: ", snake)
        {
          const tail = snake.length - 1
          const newValue = snake[tail] + 10
          if (newValue < 40) {
            setSnake(snake => {
              snake.splice(0, 1)
              return [...snake, newValue]
            })
          }
        }
        break;
    }
  }

  useInterval(switchFn, 500)
  // useEffect(() => {
  //   let timeoutId: number
  //
  //   switch (direction) {
  //     case "right":
  //       console.log("snake in moveRight: ", snake)
  //       timeoutId = setTimeout(() => {
  //         const tail = snake.length - 1
  //         const newValue = ++snake[tail]
  //         if (!boundaryRight.has(newValue)) {
  //           setSnake(snake => {
  //             snake.splice(0, 1)
  //             return [...snake, newValue]
  //           })
  //         }
  //       }, 1000);
  //       break;
  //     case "down":
  //       console.log("snake in moveDown: ", snake)
  //       timeoutId = setTimeout(() => {
  //         const tail = snake.length - 1
  //         const newValue = snake[tail] + 10
  //         if (newValue < 40) {
  //           setSnake(snake => {
  //             snake.splice(0, 1)
  //             return [...snake, newValue]
  //           })
  //         }
  //       }, 1000);
  //       break;
  //   }
  //   return () => clearTimeout(timeoutId)
  // }, [direction, snake, setSnake])
}
