import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useUserInput(setNextDirection: Dispatch<SetStateAction<string>>) {
  const [directionState, setDirectionState] = useState<null | string>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          console.log('down arrow pressed');
          if (directionState !== "up" && directionState !== "down") {
            setNextDirection("down")
            setDirectionState("down")
          }
          break;
        case "ArrowUp":
          console.log('up arrow pressed');
          if (directionState !== "up" && directionState !== "down") {
            setNextDirection("up")
            setDirectionState("up")
          }
          break;
        case "ArrowLeft":
          console.log('left arrow pressed');
          if (directionState !== "right" && directionState !== "left") {
            setNextDirection("left")
            setDirectionState("left")
          }
          break;
        case "ArrowRight":
          console.log('right arrow pressed');
          if (directionState !== "right" && directionState !== "left") {
            setNextDirection("right")
            setDirectionState("right")
          }
          break;
        default: break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [setNextDirection, directionState])
}
