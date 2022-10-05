import {Board} from './board'

export const Moves = (() => {
  const positionMarker = (x, y, dis) => {
    return {
      x,
      y,
      dis,
    }
  }

  const cells = document.querySelectorAll('.cell')
  // Fn returns a clicked field position as coordinates in an array
  const getPosition = (field) => {
    const position = [parseInt(field.dataset.x), parseInt(field.dataset.y)]
    console.log(position)
    return position
  }

  // Fn returns true for valid coordinates
  const validField = (x, y, N) => {
    return (x >= 0 &&
      x <= N &&
      y >= 0 &&
      y <= N) ?
      1 : 0
  }

  // Main fn to reach target in fewest possible steps
  const moveKnight = (start, target, N) => {
    const dX = [-2, -1, 1, 2, -2, -1, 1, 2]
    const dY = [-1, -2, -2, -1, 1, 2, 2, 1]

    const Q = []
    // Push starting position to queue
    Q.push(positionMarker(start[0], start[1], 0))
    let t
    let x; let y
    const visit = new Array(N + 1)
    // All cells are unvisited
    for (let i = 0; i <= N; i++) {
      visit[i] = new Array(N + 1)
      for (let j = 0; j <= N; j++) {
        visit[i][j] = false
      }
    }
    console.log(visit)
    // Start is visited
    visit[start[0]][start[1]] = true

    // Loop until Q has an element
    while (Q.length != 0) {
      t = Q.shift()
      // If the current position is equal to target
      // return the distance
      if (t.x === target[0] && t.y === target[1]) {
        return t.dis
      }
      // Loops all valid fields
      for (let i = 0; i < 7; i++) {
        x = t.x + dX[i]
        y = t.y + dY[i]

        // If field is valid and hasn't been visited
        // push field to Q
        if (validField(x, y, N) && !visit[x][y]) {
          visit[x][y] = true
        }
      }
    }
    return Number.MAX_VALUE
  }

  // Event listener added to checkerboard fields
  // Call getPosition fn on click
  cells.forEach((cell) => cell.addEventListener('click', (e) => getPosition(e.target)))

  return {
    moveKnight,
  }
})()

const knightPosition = [0, 0]
const target = [2, 1]
const A = Moves
console.log(A.moveKnight(knightPosition, target, 64))
