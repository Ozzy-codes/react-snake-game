import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useUserInput(setNextDirection: Dispatch<SetStateAction<string>>) {
  const [directionState, setDirectionState] = useState<null | string>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          if (directionState !== "up" && directionState !== "down") {
            setNextDirection("down")
            setDirectionState("down")
          }
          break;
        case "ArrowUp":
          if (directionState !== "up" && directionState !== "down") {
            setNextDirection("up")
            setDirectionState("up")
          }
          break;
        case "ArrowLeft":
          if (directionState !== "right" && directionState !== "left") {
            setNextDirection("left")
            setDirectionState("left")
          }
          break;
        case "ArrowRight":
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
