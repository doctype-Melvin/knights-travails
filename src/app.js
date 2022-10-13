import './style.css'
// Selects board container for UI
const boardContainer = document.querySelector('.board')
// Create N arrays of N length
const board = (N) => {
  return [...Array(N)].map((node) => [...Array(N)].map((node) => null))
}

const a = board(8) // New board of size 8x8

// Factory for cell objects
const cell = (x, y, dis) => {
  return {
    x,
    y,
    dis,
  }
}

// Fn checks if coordinates are inbounds
const inbounds = (x, y, N) => {
  if (x >= 0 && x <= N && y >= 0 && y <= N) {
    return true
  }
  return false
}

// Fn returns distance traveled
const knightMoves = (start, end, N) => {
  // Legal moves in x and y direction
  const dx = [-2, 2, -1, 1, -2, 2, -1, 1]
  const dy = [-1, 1, -2, 2, 1, -1, 2, -2]

  // Queue to store nodes
  const Q = []

  // Starting position
  Q.push(cell(start[0], start[1], 0))

  // Variables to access first queue element
  let curr
  let x; let y

  // Create array of unvisited arrays
  const visited = new Array(N)
  for (let i = 0; i <= N; i++) {
    visited[i] = new Array(N)
    for (let j = 0; j <= N; j++) {
      visited[i][j] = false
    }
  }

  // Set starting position as visited
  visited[start[0]][start[1]] = true

  while (Q.length != 0) {
    // Grab fist element of queue
    curr = Q.shift()

    // Check if starting coordinates match target
    if (curr.x === end[0] && curr.y === end[1]) {
      return curr.dis
    }

    // Loop through all legal moves
    for (let i = 0; i < 8; i++) {
      x = curr.x + dx[i]
      y = curr.y + dy[i]
      if (inbounds(x, y, N) && !visited[x][y]) {
        visited[x][y] = true
        Q.push(cell(x, y, curr.dis+1))
      }
    }
  }// End of while loop
  return Number.MAX_VALUE
}// End of Fn

// Creates divs inside the board UI
a.forEach((cell) => cell.forEach((node) => {
  boardContainer.append(document.createElement('div'))
}))

// Adds classes to cells
const cells = [...boardContainer.childNodes]
cells.forEach((cell) => cell.classList.add('cell'))

// Add event listener to board UI
cells.forEach((cell) => cell.addEventListener('click', (e) => {
  console.log(e.target)
}))

const start = [0, 0]
const target = [6, 1]
console.log(knightMoves(start, target, 8*8))
