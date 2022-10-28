import './style.css'

const knightsTravails = () => {
  const dx = [-2, -1, -2, -1, 1, 2, 1, 2] // Possible moves
  const dy = [-1, -2, 1, 2, 2, 1, -2, -1] // in either direction

  const makeCell = (x, y) => { // Create cell object
    const position = `${x},${y}` // Position as string
    const array = [x, y] // Position as numbers in array
    const list = [] // Adjacency list
    return {
      position,
      array,
      list,
    }
  }

  const board = [] // Board array
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      board.push(makeCell(x, y)) // Create x*y cells on board
    }
  }

  const isLegal = (x, y) => { // Check for legal move
    return (x >= 0 && x <= 7 && y >= 0 && y <= 7 )
  }

  const makeEdges = () => { // Creates array of legal moves
    for (const cell of board) {
      for (let i = 0; i < dx.length; i++) {
        let x = cell.array[0]
        let y = cell.array[1]
        x += dx[i]
        y += dy[i]
        if (isLegal(x, y)) {
          cell.list.push(`${x},${y}`)
        }
      }
    }
    return board
  }

  const findPath = (start, end) => {
    const origin = start
    const target = end
    const board = makeEdges()
    const V = []
    const Q = []
    Q.push(origin)
    V.push(origin)

    while (Q.length > 0) {
      const current = Q.shift()
      let adjacency = null
      console.log(current)
      if (current === target) {
        console.log(`Path from ${start} to ${end}`)
        return
      }
      for (const cell of board) {
        if (current === cell.position) {
          adjacency = cell.list
        }
      }
      for (const i in adjacency) {
        const neigh = adjacency[i]
        if (!V.includes(neigh)) {
          V.push(neigh)
          Q.push(neigh)
        }
      }
    }
  }

  return {
    board,
    isLegal,
    makeEdges,
    findPath,
  }
}

const app = knightsTravails()
console.log(app.findPath('2,2', '5,5'))
