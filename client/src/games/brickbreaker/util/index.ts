import { TRUE } from 'sass'
import spriteSheet from './Breakout_Tile_Free.png'

export const sprite = new Image()
sprite.setAttribute('src', spriteSheet)

interface Brick {
  img: { x: number; y: number; width: number; height: number }
  pos: { x: number; y: number }
}

export const GRID_SIZE = { width: 15, height: 8 }
// const BRICK_WIDTH = 60
// const PADDING_LEFT =
const SPRITE_WIDTH = 386
const SPRITE_HEIGHT = 129

const LEVELS: Brick[][] = [
  [
    {
      img: {
        x: 0 * SPRITE_WIDTH,
        y: 0 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 0, y: 0 },
    },
    {
      img: {
        x: 1 * SPRITE_WIDTH,
        y: 0 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 1, y: 0 },
    },
    {
      img: {
        x: 2 * SPRITE_WIDTH,
        y: 0 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 2, y: 0 },
    },
    {
      img: {
        x: 0 * SPRITE_WIDTH,
        y: 1 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 3, y: 0 },
    },
    {
      img: {
        x: 1 * SPRITE_WIDTH,
        y: 1 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 4, y: 0 },
    },
    {
      img: {
        x: 2 * SPRITE_WIDTH,
        y: 1 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 5, y: 0 },
    },
    {
      img: {
        x: 0 * SPRITE_WIDTH,
        y: 2 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 6, y: 0 },
    },
    {
      img: {
        x: 1 * SPRITE_WIDTH,
        y: 2 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 7, y: 0 },
    },
    {
      img: {
        x: 2 * SPRITE_WIDTH,
        y: 2 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 8, y: 0 },
    },
    {
      img: {
        x: 0 * SPRITE_WIDTH,
        y: 3 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 9, y: 0 },
    },
    {
      img: {
        x: 1 * SPRITE_WIDTH,
        y: 3 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 10, y: 0 },
    },
    {
      img: {
        x: 2 * SPRITE_WIDTH,
        y: 3 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 11, y: 0 },
    },
    {
      img: {
        x: 0 * SPRITE_WIDTH,
        y: 4 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 12, y: 0 },
    },
    {
      img: {
        x: 1 * SPRITE_WIDTH,
        y: 4 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 13, y: 0 },
    },
    {
      img: {
        x: 2 * SPRITE_WIDTH,
        y: 4 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 14, y: 0 },
    },
    {
      img: {
        x: 0 * SPRITE_WIDTH,
        y: 5 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 0, y: 1 },
    },
    {
      img: {
        x: 1 * SPRITE_WIDTH,
        y: 5 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 1, y: 1 },
    },
    {
      img: {
        x: 2 * SPRITE_WIDTH,
        y: 5 * SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
      },
      pos: { x: 2, y: 1 },
    },
  ],
]

export const getLevel = (level: number) => LEVELS[level]

export const checkCollision = (canvas: any, bricks: any, paddle: any, ball: any) => {
  // paddle
  if (
    ball.y + ball.radius >= paddle.y &&
    paddle.x < ball.x + ball.radius &&
    paddle.x + paddle.width > ball.x - ball.radius
  ) {
    const ballPos =
      ball.x > paddle.x + paddle.width / 2 ? ball.x - ball.radius : ball.x + ball.radius
    const dirX = ((ballPos - paddle.x) / (paddle.width + 2 * ball.radius) - 0.5) / 0.5
    const dir = { x: dirX, y: -Math.sqrt(1 - dirX ** 2) }
    return { collided: true, brick: null, dir }
  }

  // walls
  if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
    return { collided: true, brick: null, dir: { x: ball.dir.x * -1, y: ball.dir.y } }
  }

  // ceil
  if (ball.y - ball.radius <= 0) {
    return { collided: true, brick: null, dir: { x: ball.dir.x, y: ball.dir.y * -1 } }
  }

  // bricks
  let collidingBricks = []
  for (let i = 0; i < bricks.length; i++) {
    if (
      ball.y - ball.radius <= (bricks[i].y + 1) * bricks[i].height &&
      ball.y + ball.radius >= bricks[i].y * bricks[i].height &&
      ball.x + ball.radius >= bricks[i].x * bricks[i].width &&
      ball.x - ball.radius <= (bricks[i].x + 1) * bricks[i].width
    ) {
      collidingBricks.push(i)
    }
  }

  if (collidingBricks.length > 0) {
    let brick = collidingBricks[0]

    if (collidingBricks.length > 1) {
      let distance = getDistance(bricks[brick], ball)
      for (let j = 1; j < collidingBricks.length; j++) {
        const tmpDistance = getDistance(bricks[collidingBricks[j]], ball)
        if (tmpDistance < distance) {
          distance = tmpDistance
          brick = collidingBricks[j]
        }
      }
    }

    if (
      ball.x < bricks[brick].x * bricks[brick].width ||
      ball.x >= (bricks[brick].x + 1) * bricks[brick].width
    ) {
      return { collided: true, brick, dir: { x: ball.dir.x * -1, y: ball.dir.y } }
    }
    return { collided: true, brick, dir: { x: ball.dir.x, y: ball.dir.y * -1 } }
  }

  return { collided: false, brick: null, dir: null }
}

const getDistance = (brick: any, ball: any) => {
  return Math.sqrt(
    (ball.x - (brick.x + 0.5) * brick.width) ** 2 + (ball.y - (brick.y + 0.5) * brick.height) ** 2
  )
}
