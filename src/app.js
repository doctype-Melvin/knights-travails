import './style.css'

const KT = () => {
  // Create the chessboard
  const board = [] // Holds cells and adjacency lists
  const makeBoard = (size) => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        board.push([[i, j], []]) // coordinates and empty adjacency list
      }
    }
  }

  // Define Knight's movements
  const makeCells = (board, size) => {
    let x; let y
    const dx = [-1, 1, -2, 2, -1, 1, -2, 2] // Moves the Knight
    const dy = [2, 2, 1, 1, -2, -2, -1, -1] // can make along the x and y axis

    for (let i = 0; i < size*size; i++) {
      const array = board[i][1] // Loop over the adjacency lists of each cell
      for (let z = 0; z < dx.length; z++) {
        x = board[i][0][0]
        y = board[i][0][1]
        x = x + dx[z]
        y = y + dy[z]
        if (x >= 0 && x < size && y >= 0 && y < size) {
          // Check if move is inbound
          // If so push to adjacency list
          array.push([x, y])
        }
      }
    }
  }

  const findPath = (board, start, end) => {
    const known = [] // All visited cells/nodes/vertices
    const Q = [] // Queue to track discovered nodes
    const origin = JSON.stringify(start) // Starting position
    const target = JSON.stringify(end) // Target position
    const steps = 0

    Q.push(origin)

    while (Q.length > 0) {
      const current = Q.shift()
      let adj = null // Store the adjacency list of current cell

      if (current === target) {
        if (steps > 1) {
          console.log(`It takes ${steps} steps from ${start} to ${end}`)
        }
        console.log(`It takes ${steps} step from ${start} to ${end}`)
        return
      }
      for (const cell of board) {
        if (JSON.stringify(cell[0]) === current) {
          adj = cell[1]
        }
      } // end of loop

      for (const i in adj) {
        const move = adj[i]
        if (JSON.stringify(move) === target) {
          console.log(known)
        }
        if (!known.includes(JSON.stringify(move))) {
          known.push(JSON.stringify(move))
          Q.push(JSON.stringify(move))
        }
      } // end of loop
    }
  }

  return {
    makeBoard,
    board,
    makeCells,
    findPath,
  }
}
const a = KT()
a.makeBoard(8)
a.makeCells(a.board, 8)
a.findPath(a.board, [0, 0], [3, 3])
console.log(a.board)
