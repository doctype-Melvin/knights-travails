import './style.css'

// Graph obj

const Graph = (size) => {
  const list = new Map()

  // Graph methods
  // addVertex(v)
  const addVertex = (size) => {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        list.set([x, y].toString(), [])
      }
    }
  }
  // addEdge(v, w)
  const addEdge = (v, w) => {
    // v represents the starting position
    // w represents each legal move
    // access v's array, push w
    // access w's array, push v
    //
    list.get(v).push(w)
    list.get(w).push(v)
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
console.log(test.list.get('0,0'))
