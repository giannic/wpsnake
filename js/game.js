function Game() {
    this.snake = new Snake(this);
    this.item = null;
    this.started = false;
    this.paused = true;
    this.moved = true; // already did something this iterstion
    this.progress = 0; // score is based on progress
    this.score = 0;
    this.ID = 0;
}

// Generate an item for the snake to eat
Game.prototype.make_item = function() {
    var x, y; //position of generated item
    while (x === undefined || y === undefined ||
           this.overlap_snake(x,y) === true) {
        x = GRID_DIV*Math.floor(Math.random()*GRIDX/GRID_DIV);
        y = GRID_DIV*Math.floor(Math.random()*GRIDY/GRID_DIV);
    }
    var length_progress = this.progress + 2;
    this.item = new linked_list.node(length_progress,x,y); //id = current len
    $('<div id="node-' + length_progress + '"></div>')
     .addClass('node')
     .addClass('tile-' + (this.progress % NUM_TILES + 1)) // start at 1
     .css({'left': x, 'top': y,
           'width':NODE_SIZE, 'height':NODE_SIZE,
           'margin': GRID_SPACE})
     .appendTo($('#grid'));
}

// testing whether or not generated items overlap with snake
Game.prototype.overlap_snake = function(x,y) {
    var current = this.snake.body.head;
    while (current != null) {
        if (current.x === x && current.y === y) {
            return true;
        }
        current = current.next;
    }
    return false;
}

Game.prototype.update_score = function() {
    $("#score").text(this.score*SCORE_MULTIPLE);
}
