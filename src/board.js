export const Board = (()=>{
  const board = document.querySelector('.board')
  board.classList.add('board')

  const makePattern = () => {
    const table = document.createElement('table')
    for (let i = 0; i < 8; i++) {
      const row = document.createElement('tr')
      for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td')
        if ((i+j) % 2 === 0) {
          cell.classList.add('cell')
          cell.classList.add('white')
          row.append(cell)
        } else {
          cell.classList.add('black')
          cell.classList.add('cell')
          row.append(cell)
        }
      }
      table.append(row)
    }
    board.append(table)
  }

  return {
    board,
    makePattern,
  }
})()

Board.makePattern()
