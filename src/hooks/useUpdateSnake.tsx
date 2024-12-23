import { Dispatch, SetStateAction } from "react"

const boundaryRight = new Map()
for (let i = 0; i < 50; i += 10) {
	boundaryRight.set(i, true)
}

export default function useUpdateSnake(snake: number[], setSnake: Dispatch<SetStateAction<number[]>>, direction: string) {

	switch (direction) {
		case "right": {
			const tail = snake.length - 1
			const newValue = ++snake[tail]
			if (!boundaryRight.has(newValue)) {
				setSnake(snake => {
					snake.splice(0, 1)
					return [...snake, newValue]
				})
			}
			break;
		}
		case "down": {
			console.log("snake in moveDown: ", snake)
			const tail = snake.length - 1
			const newValue = snake[tail] + 10
			if (newValue < 40) {
				setSnake(snake => {
					snake.splice(0, 1)
					return [...snake, newValue]
				})
			}
			break;
		}
	}
}
