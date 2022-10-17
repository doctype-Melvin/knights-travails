import './style.css'

// Graph obj

const Graph = (size) => {
  const list = new Map()

  // Graph methods
  // addVertex(v)
  const addVertex = (size) => {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        // Set keys as a string - get method performs strict equality check
        // When using arrays, strict equality returns false
        list.set([x, y].toString(), [])
      }
    }
  }

  const addEdge = (list) => {
    let x; let y
    // For each position in the list push all
    // legal moves to the position's array
    for (const key of list) { // Loops through the Map's keys
      const position = key[0].split(',') // Split coordinate into x and y
      x = parseInt(position[0])
      y = parseInt(position[1])
      for (let i = 0; i < dx.length; i++) { // Loop over one of the move arrays
        x = x + dx[i]
        y = y + dy[i]
        const move = [x, y].toString() // Store the legal move
        if (list.has(move) && !list.get(key[0]).includes(move)) {
          // check if move is legal (inbounds) and if it
          // has not been stored yet
          list.get(key[1].push(move)) // push legal move to position array
        }
      }
    }
  }
  // printGraph
  const printGraph = () => {
    const allKeys = list.keys()
    for (const i of allKeys) {
      const allValues = list.get(i)
      let conc = ''
      for (const j of allValues) {
        conc += j + ' '
      }
      console.log(i + ' -> ' + conc)
    } // end of loop
  }
  // bfs(v)
  // dfs(v)
  return {
    list,
    addVertex,
    addEdge,
    printGraph,
  }
}
// Directional moves
const dx = [-2, -1, -2, -1, 2, 1, 2, 1]
const dy = [-1, -2, 1, 2, -1, -2, 1, 2]
const test = Graph(8)
test.addVertex(8)
console.log(test.list)
console.log(test.addEdge(test.list))
