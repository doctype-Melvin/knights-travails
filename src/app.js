import './style.css'
// Selects board container for UI
const boardContainer = document.querySelector('.board')

// Create N arrays of N length
const board = (N) => {
  return [...Array(N)].map((node) => [...Array(N)].map((node) => null))
}

const a = board(8) // New board of size 8x8

// Creates divs inside the board UI
a.forEach((cell) => cell.forEach((node) => {
  boardContainer.append(document.createElement('div'))
}))

// Adds classes to cells
const cells = [...boardContainer.childNodes]
cells.forEach((cell) => cell.classList.add('cell'))

// Add event listener to board UI
cells.forEach((cell) => cell.addEventListener('click', (e) => {
  console.log(e.target)
}))


// const start = a[0][1]
// const end = a[2][2]
// console.log(start)
