import {Board} from './board'

export const Moves = (() => {
  const boardMin = [0, 0]
  const boardMax = [7, 7]
  const knightMoves = (start, target) => {
  }

  const cells = document.querySelectorAll('.cell')
  let position
  cells.forEach((cell) => cell.addEventListener('click', () => {
    console.log(cell.dataset)
    position = cell.dataset
    return position
  }))
})()
