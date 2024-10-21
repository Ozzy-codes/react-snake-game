import { useEffect, useState } from "react";

export function Snake() {

  const [YelementPosition, setYelementPosition] = useState(25);
  const [XelementPosition, setXelementPosition] = useState(25);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          console.log('down arrow pressed');
          setXelementPosition(XelementPosition + 1)
          break;
        case "ArrowUp":
          console.log('up arrow pressed');
          setXelementPosition(XelementPosition - 1)
          break;
        case "ArrowLeft": console.log('left arrow pressed');
          setYelementPosition(YelementPosition - 1)
          break;
        case "ArrowRight":
          console.log('right arrow pressed');
          setYelementPosition(YelementPosition + 1)
          break;
        default: break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })
  return (
    <div className='snake' style={{ left: YelementPosition + '%', top: XelementPosition + '%', position: 'absolute', backgroundColor: 'green' }}> </div>
  )
}
