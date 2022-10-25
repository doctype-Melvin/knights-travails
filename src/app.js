import './style.css'

const knightsTravails = () => {
  // Create a graph
  const graph = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      graph.push([[i, j], []]) // Push array of coordinates and
      // empty adjacency list
    }
  }

  // Behaviour along x and y axis
  const dx = [-2, -1, -2, -1, 2, 1, 2, 1]
  const dy = [-1, -2, 1, 2, -1, -2, 1, 2]

  // Loop through graph
  for (const v of graph) {
    let x; let y
    const adjacency = v[1] // Grab adjacency array
    for (let z = 0; z < dx.length; z++) {
      // Create moves and check if moves are legal
      x = v[0][0]+dx[z]
      y = v[0][1]+dy[z]
      if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
        adjacency.push([x, y])
      }
    }
  }
  return {
    graph,
  }
}

const a = knightsTravails()
console.log(a.graph)
