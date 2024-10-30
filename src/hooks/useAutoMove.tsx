import { Dispatch, SetStateAction, useEffect } from "react"

const boundaryRight = new Map()
boundaryRight.set(10, true)

export default function useAutoMove(snake: number[], setSnake: Dispatch<SetStateAction<number[]>>, direction: string) {

	useEffect(() => {
		let timeoutId: number

		switch (direction) {
			case "right":
				console.log("snake in moveRight: ", snake)
				timeoutId = setTimeout(() => {
					const tail = snake.length - 1
					const newValue = ++snake[tail]
					snake.splice(0, 1)
					if (!boundaryRight.has(newValue)) {
						setSnake([...snake, newValue])
					}
				}, 1000);
				break;
			case "down":
				console.log("snake in moveDown: ", snake)
				timeoutId = setTimeout(() => {
					const tail = snake.length - 1
					const newValue = snake[tail] + 10
					snake.splice(0, 1)
					if (newValue < 40) {
						setSnake([...snake, newValue])
					}
				}, 1000);
				break;
		}
		return () => clearTimeout(timeoutId)
	}, [direction, snake, setSnake])
}

