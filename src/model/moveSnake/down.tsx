import { Dispatch, SetStateAction } from "react";

const moveDown = (snake: number[], setSnake: Dispatch<SetStateAction<number[]>>) => {
	console.log("snake in moveDown: ", snake)
	const timeoutId = setTimeout(() => {
		const tail = snake.length - 1
		const newValue = snake[tail] + 10
		// console.log("snake: ", snake)
		snake.splice(0, 1)
		if (newValue < 40) {
			setSnake([...snake, newValue])
		}
	}, 1000)
	return () => clearTimeout(timeoutId)
}

export default moveDown
