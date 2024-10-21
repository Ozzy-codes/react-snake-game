# What we hope to accomplish

CREATE A SNAKE GAME!

## How are we going to do it? 

### What platform are we gonna build it on? e.g. web, Desktop, CLI 

- Build with electron - target platform is DESKTOP

### GAME REQUIREMENTS
#### Playing Board
- container of game and represents walls 

#### Snake
- when you hit yourself or wall game is over
- user controls via arrow keys (up, down, left, right)

#### food
- when we hit it, the snake grows

***

### MISC.

- build a grid - div contianer maybe 100 x 100 of div
- could we dynamically apply CSS to grid to represent food and snake? 
  > determine snake interactions (hit wall, eat food, hit itself) based on css styles? 
  e.g. 

  ```javascript
  if (div.className.has("wall")) setIsGameOver(true)
  ```
- determine how to move snake
  > need a set timeout that continue to update the head and tail of the snake in one direction.
  > once a keypress of up, down, left or right is pressed the previous set timeout is cleaned up and a new one is started in the new direction. 
  > NOTE: do we need to check if key pressed are null e.g. if snake is already heading up, should the up key be silenced? may involve state check

- What does an interaction with food look like?
  > Snake keeps moving forward in one direction, snake grows in size by one. 


