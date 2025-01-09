import { Dispatch, SetStateAction, useEffect, useState } from "react";
import GameBoard from "../enum/gameboard";

export default function useUserInput(setNextDirection: Dispatch<SetStateAction<string | null>>, snake: number[]) {
  const [currentDirection, setCurrentDirection] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
        case "j": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue + GameBoard.RowLength
          if (snake.length === 1 && currentDirection === null) {
            setNextDirection("down")
            setCurrentDirection("down")
          } else if (snake.length === 1 && currentDirection !== "up" || !!behindTailValue && nextValue !== behindTailValue) {
            setNextDirection("down")
            setCurrentDirection("down")
          }
        }
          break;
        case "ArrowUp":
        case "k": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue - GameBoard.RowLength
          if (snake.length === 1 && currentDirection === null) {
            setNextDirection("up")
            setCurrentDirection("up")
          } else if (snake.length === 1 && currentDirection !== "down" || !!behindTailValue && nextValue !== behindTailValue) {
            setNextDirection("up")
            setCurrentDirection("up")
          }
        }
          break;
        case "ArrowLeft":
        case "h": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue - 1
          if (snake.length === 1 && currentDirection === null) {
            setNextDirection("left")
            setCurrentDirection("left")
          } else if (snake.length === 1 && currentDirection !== "right" || !!behindTailValue && nextValue !== behindTailValue) {
            setNextDirection("left")
            setCurrentDirection("left")
          }
        }
          break;
        case "ArrowRight":
        case "l": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue + 1
          if (snake.length === 1 && currentDirection === null) {
            setNextDirection("right")
            setCurrentDirection("right")
          } else if (snake.length === 1 && currentDirection !== "left" || !!behindTailValue && nextValue !== behindTailValue) {
            setNextDirection("right")
            setCurrentDirection("right")
          }
        }
          break;
        default: break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [setNextDirection, currentDirection, snake])
}
