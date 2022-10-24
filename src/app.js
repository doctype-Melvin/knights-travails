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
    const Q = []
    let steps = 0
    const visited = []
    const target = JSON.stringify(end)
    let adjacency = null
    Q.push(JSON.stringify(start))
    if (end[0] > 7 || end[0] < 0 || end[1] > 7 || end[1] < 0) {
      console.log('Out of bounds')
      return
    }
    while (Q.length > 0) {
      const current = Q.shift()
      if (visited.length >= 0 && !visited.includes(current)) {
        visited.push(current)
      }

      for (const cell of board) {
        if (JSON.stringify(cell[0]) === current) {
          adjacency = cell[1].map((item) => JSON.stringify(item))
          if (adjacency.includes(target)) {
            steps++
            console.log('Found' + ' ' + target + ' ' + steps + ' ' + 'steps')
            return
          }
          if (!adjacency.includes(target)) { // ???
            steps++
            adjacency.map((item) => Q.push(item))
          }
        }
      }
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
a.findPath(a.board, [0, 0], [2, 1])
console.log(a.board)
