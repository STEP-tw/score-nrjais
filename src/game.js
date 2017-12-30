const Game = function(){
  this.snake = undefined;
  this.score = 0;
  this.food = undefined;
}

Game.prototype = {
  addSnake: function(snake){
    this.snake = snake;
  },
  addFood : function(food){
    this.food = food;
  },
  getScore : function(){
    return this.score;
  },
  getSnakeHead : function(){
    return this.snake.getHead();
  },
  moveSnake : function(){
    return this.snake.move();
  },
  hasEatenFood : function(){
    let head = this.snake.getHead();
    return head.isSameCoordAs(this.food);
  },
  turnSnakeLeft : function(){
    this.snake.turnLeft();
  },
  turnSnakeRight: function () {
    this.snake.turnRight();
  },
  growSnake : function(){
    this.snake.grow();
    this.score += 10;
  }
}