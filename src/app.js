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

const test = Graph(8)
const vertices = [0, 1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < vertices.length; i++) {
  test.addVertex(vertices[i])
}
for (const value of test.list) {
  for (let i = 0; i < vertices.length; i++) {
    value[1].push(i)
  }
}
console.log(test.list)
// /// Next: Graph traversal algorithms
