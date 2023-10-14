"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
  DEFAULT_FOOD, DEFAULT_SNAKE, DEFAULT_SPEED, DirectionMoviment, checkEat,
  checkCollision, drawFood, drawSnake, moveSnake, randomPosition
} from '@/utils/snakeGameUtils';
import { useInterval } from '@/hooks/useInterval';

interface DrawGridProps {
  ctx: CanvasRenderingContext2D | null | undefined,
  canvas: HTMLCanvasElement | null
}

export const Grid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scoreRef = useRef<HTMLSpanElement>(null)
  const gameOverRef = useRef<HTMLDivElement>(null)
  const [snakeSegments, setSnakeSegments] = useState(DEFAULT_SNAKE)
  const [food, setFood] = useState(DEFAULT_FOOD);
  const [direction, setDirection] = useState<DirectionMoviment>()
  const [speed, setSpeed] = useState<number | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  function startGame() {
    setSnakeSegments(DEFAULT_SNAKE)
    setSpeed(DEFAULT_SPEED)
    setFood(DEFAULT_FOOD)
    setGameOver(false)
    setIsVisible(false)
    setDirection('up')
    if (canvasRef.current) {
      canvasRef.current.style.filter = "blur(0)"
    }
  }

  function endGame() {
    setGameOver(true)
    if (canvasRef.current) {
      canvasRef.current.style.filter = "blur(4px)"
    }
    setSpeed(null)
  }

  function drawGrid({ canvas, ctx }: DrawGridProps) {
    if (canvas !== null && ctx) {
      ctx.lineWidth = 1
      ctx.strokeStyle = '#1E2D3D'

      for (let i = 20; i < canvas.width; i += 20) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()
      }

      for (let i = 20; i < canvas.height; i += 20) {
        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
      }
    }
  }

  function handleKeyPress({ key }: KeyboardEvent) {
    if (key === 'ArrowRight' && direction !== 'left') {
      setDirection('right')
    }
    if (key === 'ArrowLeft' && direction !== 'right') {
      setDirection('left')
    }
    if (key === 'ArrowUp' && direction !== 'down') {
      setDirection('up')
    }
    if (key === 'ArrowDown' && direction !== 'up') {
      setDirection('down')
    }
  }

  const gameLoop = () => {
    console.log('start')
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    ctx?.clearRect(0, 0, 400, 600)
    drawGrid({ canvas, ctx })
    drawFood({ ctx, food })
    moveSnake(snakeSegments, direction)
    drawSnake({ ctx, snake: snakeSegments })
    checkEat({ snakeSegments, food, setFood, setSpeed, score: scoreRef })
    if (checkCollision(snakeSegments)) {
      endGame()
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    ctx?.clearRect(0, 0, 400, 600)
    drawGrid({ canvas, ctx })
    drawFood({ ctx, food })
    drawSnake({ ctx, snake: snakeSegments })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeSegments, food])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, setDirection])


  useInterval(() => gameLoop(), speed)

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`absolute w-[238.69px] h-[405.32px] bg-primary-200/80 rounded-lg
        left-8 shadow-[1px_5px_11px_inset_rgba(02,18,27,7.1)]`}
        width={400} height={600}
      >
      </canvas>
      <button
        className={`absolute bg-accent-100 rounded-md text-sm w-28 h-[38px]
        bottom-[80px] left-[95px] ${isVisible ? "block" : "hidden"}`}
        onClick={startGame}
      >
        start-game
      </button>
      <p className='absolute font-game flex flex-col items-center gap-2 right-[90px]
        text-accent-200 drop-shadow-md'
      >
        SCORE
        <span ref={scoreRef} className='animate-flip-in-hor-top transition-all'>
          00
        </span>
      </p>
      <div ref={gameOverRef} className='z-10 data-[show="false"]:hidden 
        data-[show="true"]:flex data-[show="true"]:flex-col items-center justify-center
        w-[400px] gap-3'
        data-show={gameOver}
      >
        <span className='font-game text-2xl text-accent-300'>GAME OVER!</span>
        <span className='font-game text-secondary-200'>Score: {scoreRef.current?.innerText}</span>
        <button className='flex flex-row gap-2 items-center justify-center 
          bg-accent-100 rounded-md w-48 h-20'
          onClick={startGame}
        >
          <i className="ri-play-circle-line text-xl stroke-1"></i>
          Jogar novamente
        </button>
      </div>
    </>
  )
}

