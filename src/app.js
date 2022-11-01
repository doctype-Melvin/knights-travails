const knightsTravails = () => {// Moves
  const dx = [-1, -2, -1, -2, 1, 2, 1, 2] // Moves the knight can
  const dy = [-2, -1, 2, 1, -2, -1, 2, 1] // go in either direction

  const cellObj = (a, b) => { // Create obj with cell position
    const position = `${a},${b}` // Pos as string
    const node = [a, b] // Pos as node for printing path
    const list = [] // node for adjacency list
    const dist = 0 // Distance counter to track steps
    const parent = null
    return {
      position,
      node,
      list,
      dist,
      parent,
    }
  }

  const board = [] // 2d node === chessboard
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push(cellObj(i, j))
    }
  }

  const isValid = (a, b) => { // Checks for valid cell position
    return (a >= 0 && a <= 7 && b >= 0 && b <= 7)
  }

  // Creates adjacency list consisting of legal moves
  const addMove = () => {
    for (let z = 0; z < dx.length; z++) {
      let x; let y
      for (const cell of board) {
        x = cell.node[0]
        y = cell.node[1]
        x = x+dx[z]
        y = y+dy[z]
        if (isValid(x, y)) {
          cell.list.push(`${x},${y}`)
        }
      }
    }
  }

  // Goes through the parent properties of each cell of the path
  const makePath = (array) => {
    const p = []
    while (array.length > 0) {
      const cell = array.shift()
      p.unshift(cell.position)
      if (cell.parent) array.push(cell.parent)
    }
    return p
  }

  // Main function
  const moveKnight = (start, end) => {
    addMove() // Creates edges - legal moves in adjacency list of cell
    let origin = null
    let target = null
    for (const cell of board) { // Loops through board cells
      if (cell.position === start) {
        origin = cell // Sets the starting cell obj
      }
      if (cell.position === end) {
        target = cell // Sets the ending cell obj
      }
    }

    const V = [start] // Visited node - holds strings
    const Q = [origin] // Queue - holds objects
    const P = [target] // Path from start to target


    while (Q.length > 0) { // While queue is not empty
      const current = Q.shift()

      if (current.position === end) { // Target position found
        console.log('%cShortest path from', 'color:green; font-size: 18px;')
        console.log(`%c${start} to ${end}`, 'color: orange; font-size: 18px')
        console.log( `%cfound in ${current.dist} steps`, 'color: hotpink; font-size: 18px')
        console.log('%cHere\'s the path...', 'color:lightblue; font-size: 18px')
        makePath(P).forEach((step) => console.log(`%c${step}`, 'color:yellow; font-size: 18px'))
        return
      } else {
        current.list.forEach((item) => { // Go thorugh adjacency list
          if (!V.includes(item)) { // If cell hasn't been visited
            V.push(item) // Push cell position to visited
            board.filter((element) => { // Filter cell objects
              if (element.position === item) { // by matching adjacent moves
                element.dist = current.dist+1 // Increment distance
                element.parent = current// Set parent obj
                Q.push(element) // push cell objects to queue
              }
            })
          }
        })
      }
    }
  }
  return {
    board,
    moveKnight,
  }
}

const newGame = knightsTravails()
newGame.moveKnight('3,1', '2,2')
