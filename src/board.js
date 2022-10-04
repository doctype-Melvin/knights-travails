export const Board = (()=>{
  const board = document.querySelector('.board')
  board.classList.add('board')
  const table = document.createElement('table') // Table element

  const makePattern = (() => { // Fn creates checkerboard pattern
    for (let i = -7; i < 1; i++) { // Create 8 rows from -7
      const row = document.createElement('tr')
      row.setAttribute('data-num', Math.abs(i)) // Set y coordinate
      for (let j = 0; j < 8; j++) { // Create 8 cells in each row
        const cell = document.createElement('td')
        cell.setAttribute('data-x', j) // Store x-coordinate
        cell.setAttribute('data-y', row.dataset.num) // Store y-coordinate
        if ((i+j) % 2 === 0) { // Coordinates sum = even >> white bg color
          cell.classList.add('white')
          cell.classList.add('cell')
          row.append(cell)
        } else { // Coordinates sum = odd >> black bg color
          cell.classList.add('black')
          cell.classList.add('cell')
          row.append(cell)
        }
      }
      table.append(row)
    }
    board.append(table)
  })()

  const cells = document.querySelectorAll('.cell')
  cells.forEach((cell) => cell.addEventListener('click', () => {
    console.log(cell.dataset, 'Did it work')
  }))


  return {
    board,
    makePattern,
  }
})()

// Board.makePattern()

// const cells = document.querySelectorAll('.cell')
// console.log(cells)
