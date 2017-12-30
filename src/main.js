let game = undefined;
let numberOfRows=60;
let numberOfCols=120;
let animator=undefined;

const animateSnake=function() {
  let oldHead=game.getSnakeHead();
  let oldTail=game.moveSnake();
  let head=game.getSnakeHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  growSnakeIfEatenFood();
}

const growSnakeIfEatenFood = function(){
  if (game.hasEatenFood()) {
    game.growSnake();
    let food = createFood(numberOfRows, numberOfCols);
    game.addFood(food);
    drawFood(food);
    updateScore();
  }
}

const updateScore = function(){
  let score = game.getScore();
  showScore(score);
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.turnSnakeLeft();
      break;
    case "KeyD":
      game.turnSnakeRight();
      break;
    case "KeyC":
      game.growSnake();
      updateScore();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();
  return new Snake(head,body);
}

const createFood=function(numberOfRows,numberOfCols) {
  return generateRandomPosition(numberOfCols,numberOfRows);
}

const startGame=function() {
  game = new Game();
  let snake = createSnake();
  game.addSnake(snake);
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(snake);
  let food = createFood(numberOfRows, numberOfCols);
  game.addFood(food);
  drawFood(food);
  showScore(game.getScore());
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
