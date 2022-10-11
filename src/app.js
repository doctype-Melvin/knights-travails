import './style.css'
// Create N arrays of N length
const board = (N) => {
  return [...Array(N)].map((node) => [...Array(N)].map((node) => null))
}
const a = board(8)
console.log(a)
const b = new Map(a)
console.log(b)
