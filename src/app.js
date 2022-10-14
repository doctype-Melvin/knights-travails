import './style.css'

// Graph obj

const Graph = (size) => {
  const list = new Map()

  // Graph methods
  // addVertex(v)
  const addVertex = (v) => {
    list.set(v, [])
  }
  // addEdge(v, w)
  const addEdge = (v, w) => {
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

const test = Graph(4)
const vertices = [1, 2, 3, 4]
for (let i = 0; i < vertices.length; i++) {
  test.addVertex(vertices[i])
}
test.addEdge(1, 2)
test.addEdge(2, 3)
test.addEdge(3, 4)
test.printGraph()
// /// Next: Graph traversal algorithms
