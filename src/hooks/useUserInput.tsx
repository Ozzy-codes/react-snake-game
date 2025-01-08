import { Dispatch, SetStateAction, useEffect } from "react";
import GameBoard from "../enum/gameboard";

export default function useUserInput(setNextDirection: Dispatch<SetStateAction<string>>, snake: number[]) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
        case "j": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue + GameBoard.RowLength
          console.log("down pressed")
          if (nextValue !== behindTailValue) {
            setNextDirection("down")
          }
        }
          break;
        case "ArrowUp":
        case "k": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue - GameBoard.RowLength
          console.log("up pressed")
          if (nextValue !== behindTailValue) {
            setNextDirection("up")
          }
        }
          break;
        case "ArrowLeft":
        case "h": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue - 1
          console.log("left pressed")
          if (nextValue !== behindTailValue) {
            setNextDirection("left")
          }
        }
          break;
        case "ArrowRight":
        case "l": {
          const tail = snake.length - 1
          const tailValue = snake[tail]
          const behindTailValue = snake[tail - 1]
          const nextValue = tailValue + 1
          console.log("right pressed")
          if (nextValue !== behindTailValue) {
            setNextDirection("right")
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
  }, [setNextDirection, snake])
}
