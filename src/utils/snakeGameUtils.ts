import { SnakeProps } from "@/components/Game/Snake";

interface CollisionWithFoodProps {
    foodPosition: {
      x: number;
    y: number;
    },
    snake: SnakeProps
}

interface DrawSnakeProps {
  ctx: CanvasRenderingContext2D | null | undefined,
  snake: {
    x: number,
    y: number
  }[]
}

interface DrawFoodProps {
  ctx: CanvasRenderingContext2D | null | undefined,
  food: {
    x: number | undefined;
    y: number | undefined;
    color: string
  }
}

interface CheckEatProps {
  snakeSegments: { x: number; y: number }[],
  food: {
    x: number | undefined;
    y: number | undefined;
    color: string
  }
  setFood: React.Dispatch<React.SetStateAction<{
    x: number | undefined;
    y: number | undefined;
    color: string;
  }>>
  setSpeed: React.Dispatch<React.SetStateAction<number | null>>
  score: React.RefObject<HTMLSpanElement>
}

export type DirectionMoviment = 'left' | 'right' | 'up' | 'down' | undefined

const GRID_SIZE = 20
export const DEFAULT_FOOD: {
  x: number | undefined;
  y: number | undefined;
  color: string
} = {
  x: randomPosition(),
  y: randomPosition(),
  color: "#E99287"
}

export const DEFAULT_SNAKE: { x: number; y: number }[] = [{x: 200, y: 300}]
export const DEFAULT_SPEED = 200
export const eatEffect: HTMLAudioElement = new Audio('/assets/eat_effect.mp3')

export function isCollisionWithFood({foodPosition, snake}: CollisionWithFoodProps) {
  const isCollision = snake.segments[0].x === foodPosition.x && snake.segments[0].y === foodPosition.y

  return isCollision
}

export function moveSnake(
  snakeSegments: { x: number; y: number }[],
  direction: DirectionMoviment,
) {
  if(!direction) return

  const head = snakeSegments[snakeSegments.length - 1]
  snakeSegments.shift()

  switch(direction) {
    case "right":
      snakeSegments.push({x: head.x + GRID_SIZE, y: head.y})
      break;
    case "left":
      snakeSegments.push({x: head.x - GRID_SIZE, y: head.y})
      break;
    case "up":
      snakeSegments.push({x: head.x, y: head.y - GRID_SIZE})
      break;
    case "down":
      snakeSegments.push({x: head.x , y: head.y + GRID_SIZE})
      break;
    default:
      break;
  }
}

export function checkCollision(
  snakeSegments: { x: number; y: number }[],
) {
  const MAX_WIDTH = 390
  const MAX_HEIGHT = 590

  const head = snakeSegments[snakeSegments.length - 1]
  const neckIndex = snakeSegments.length - 2

  const wallCollision = head.x < 0 || head.x >= MAX_WIDTH || head.y < 0 || head.y >= MAX_HEIGHT

  const selfCollision = snakeSegments.find((position, index) => {
    return index < neckIndex && position.x === head.x && position.y === head.y
  })

  return wallCollision || selfCollision
}

export function drawSnake({ctx, snake}: DrawSnakeProps) {
  if(ctx) {
    ctx.fillStyle = '#43D9AD'

    snake.forEach((position, index) => {
      if(index === snake.length -1) {
        ctx.fillStyle = '#3abc95'
      }

      ctx.fillRect(position.x, position.y, GRID_SIZE, GRID_SIZE)
    })
  }
}

export function drawFood({ctx, food}: DrawFoodProps) {
  const {color, x, y} = food

  if(ctx) {
    ctx.shadowColor = color
    ctx.shadowBlur = 7
    ctx.fillStyle = color
    ctx.fillRect(x!, y!, GRID_SIZE, GRID_SIZE)
    ctx.shadowBlur = 0
  }
}

function randomNumber(max: number, min: number) {
  return Math.round(Math.random() * (max - min) + min)
}

export function randomPosition() {
  const number = randomNumber(0, 400 - GRID_SIZE)
  return Math.round(number / 20) * 20
}

export function checkEat({snakeSegments, food, setFood, setSpeed, score}: CheckEatProps) {
  const head = snakeSegments[snakeSegments.length - 1]
  let x = randomPosition()
  let y = randomPosition()

  if(head.x === food.x && head.y === food.y) {
    snakeSegments.push(head)
    eatEffect.play()
    setFood({x, y, color: food.color})
    setSpeed(prevSpeed => prevSpeed?? - 5)
    incrementScore(score)
  }

  while(snakeSegments.find((position) => position.x === x && position.y === y)) {
    food.x = randomPosition()
    food.y = randomPosition()
  }
}

export function incrementScore(score: React.RefObject<HTMLSpanElement>) {
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num
  }
  if(score.current) {
    score.current.innerText = formatNumber(+score.current.innerText + 5).toString()
  }
}