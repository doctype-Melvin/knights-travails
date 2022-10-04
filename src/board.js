export const Board = (()=>{
  const board = document.querySelector('.board')
  board.classList.add('board')
  const makePattern = () => {
    const table = document.createElement('table')
    board.append(table)
  }
  return {
    board,
    makePattern,
  }
})()

Board.makePattern()
