import { Dispatch, SetStateAction } from "react";

const boundaryRight = new Map()
boundaryRight.set(10, true)

const moveRight = (snake: number[], setSnake: Dispatch<SetStateAction<number[]>>) => {
	console.log("snake in moveRight: ", snake)
	const timeoutId = setTimeout(() => {
		const tail = snake.length - 1
		const newValue = ++snake[tail]
		// console.log("snake: ", snake)
		snake.splice(0, 1)
		if (!boundaryRight.has(newValue)) {
			setSnake([...snake, newValue])
		}
	}, 1000)
	return () => clearTimeout(timeoutId)
}

export default moveRight
