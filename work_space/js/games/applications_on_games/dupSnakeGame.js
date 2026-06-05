function createLine(line, char, size) {
  if(size === 0) {
    return line;
  }
  line.push(char);
  return createLine(line,char,size - 1);
}

function addEnds(row,char) {
  row.unshift(char);
  row.push(char);
  return row;
}

function positionOfFood(rowSize,columnSize) {
   const positionOfFood = [];
   positionOfFood[0] = Math.ceil(Math.random() * rowSize - 1);
   positionOfFood[1] = Math.ceil(Math.random() * columnSize - 2); 
  return positionOfFood; 
}

function diaplyBoard(totalRows,totalColumns) {
  
  let board = [];
  let char = "🟫";
  board.push(createLine([],char,totalColumns));
  for (let row = 2; row < totalRows; row++) {
    let line = [];
    const row = createLine(line,"  ",totalColumns - 2);
    board.push(addEnds(row,char));   
  }
  board.push(createLine([],char,totalColumns));
  return board;
}


function diaplyBoard(totalRows,totalColumns) {
  
  let board = [];
  let char = "🟫";
  board.push(createLine([],char,totalColumns));
  for (let row = 2; row < totalRows; row++) {
    let line = [];
    const row = createLine(line,"  ",totalColumns - 2);
    board.push(addEnds(row,char).join());   
  }
  board.push(createLine([],char,totalColumns));
  return board;
}

function startGame() {
  const board = diaplyBoard(10,10);
}
startGame()
