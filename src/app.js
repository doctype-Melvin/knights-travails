import './style.css'

const knightsTravails = () => {
  const cell = (...data) => {
    const position = `${data[0]},${data[1]}`
    const array = [parseInt(data[0]), parseInt(data[1])]
    const list = []
    return {
      position,
      array,
      list,
    }
  }
  // Create a graph
  const graph = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      graph.push(cell(`${i}`, `${j}`))
      // graph.push([`${i},${j}`, [i, j], []]) // Push array of coordinates
      // first as strings, then as numbers and an
      // empty adjacency list
    }
  }

  // Behaviour along x and y axis
  const dx = [-2, -1, -2, -1, 2, 1, 2, 1]
  const dy = [-1, -2, 1, 2, -1, -2, 1, 2]

  // Loop through graph and create edges
  for (const v of graph) {
    let x; let y
    const adjacency = v.list // Grab adjacency array
    for (let z = 0; z < dx.length; z++) {
      // Create moves and check if moves are legal
      x = v.array[0]+dx[z]
      y = v.array[1]+dy[z]
      if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
        adjacency.push(`${x},${y}`)
      }
    }
  }
  // for (const v of graph) {
  //   let x; let y
  //   const adjacency = v[2] // Grab adjacency array
  //   for (let z = 0; z < dx.length; z++) {
  //     // Create moves and check if moves are legal
  //     x = v[1][0]+dx[z]
  //     y = v[1][1]+dy[z]
  //     if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
  //       adjacency.push(`[${x},${y}]`)
  //     }
  //   }
  // }

  const findPath = (board, ...coordinates) => {
    const start = coordinates[0]
    const target = coordinates[1]
    const Q = [] // Queue
    const V = [] // Visisted vertices
    let current = null
    for (const cell of board) {
      if (cell.position === start) {
        current = cell
      }
    }
    Q.push(current)

    while (Q.length != 0) {
      current = Q.shift()
      if (current.list.includes(target)) {
        return 'Found'
      }
    }
    return start + ' ' + target
  }
  return {
    graph,
    findPath,
  }
}

const a = knightsTravails()
console.log(a.graph)
console.log(a.findPath(a.graph, '0,0', '1,2'))


