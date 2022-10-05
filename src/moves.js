import {Board} from './board'

const cells = document.querySelectorAll('.cell')

class Graph {
  constructor() {
    this.checkerboard = new Map()
  }

  addVertex(v) {
    this.checkerboard.set(v, [])
  }

  addEdge(board = this.checkerboard) {
  }
}


const checkerboard = new Graph
cells.forEach((cell) => checkerboard.addVertex([cell.dataset.x, cell.dataset.y]))

console.log(checkerboard.checkerboard)
