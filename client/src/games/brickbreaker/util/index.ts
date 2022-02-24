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
const SPRITE_HEIGHT = 130

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
