import { Dispatch, SetStateAction, useEffect } from "react";

export default function useUserInput(setDirection: Dispatch<SetStateAction<string>>) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          console.log('down arrow pressed');
          setDirection("down")
          break;
        case "ArrowUp":
          console.log('up arrow pressed');
          break;
        case "ArrowLeft":
          console.log('left arrow pressed');
          break;
        case "ArrowRight":
          console.log('right arrow pressed');
          setDirection("right")
          break;
        default: break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [setDirection])
}
