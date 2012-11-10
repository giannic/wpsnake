/*
 * This is the main game file of the WP snake game.
 */

(function() {
var g, pause_on_tile;

$(document).ready(function() {
    // set up graphics
    $('#grid').css({'width': GRIDX_DISPLAY, 'height': GRIDY_DISPLAY});
    $('.node').css({'width': NODE_SIZE, 'height': NODE_SIZE,
                    'margin': GRID_SPACE});

    g = new Game();
    pause_on_tile = true;

    setup_messages();
    // bind buttons
    $('#reset').click(function() {
        reset()
    });

    $('#pause').click(function() {
        g.paused = !g.paused;
    });

    $('#toggle-pause').click(function() {
        if (pause_on_tile === true) {
            pause_on_tile = false;
            $('#toggle-pause').css({"background-color": "#888888"});
        } else {
            pause_on_tile = true;
            $('#toggle-pause').css({"background-color": "#E51400"});
        }
    });

    // set up blocks and bounds
    reset();
    g.Id = setInterval(update, 1000/SPEED);
});

function update() {
    $("#grid #start").hide();
    $("#grid #continue").hide();
    $("#grid #end").hide();
    if (g.started && !g.paused && !g.over) {
        g.snake.move();
        check_status();
        g.update_score();
        g.snake.moved = false;
    } else if (!g.started) {
        $("#grid #start").show();
    } else if (g.over) {
        $("#grid #end").show();
    } else if (g.paused) {
        $("#grid #continue").show();
    }
};

function reset() {
    g.item = null;
    g.started = false;
    g.paused = true; // start the game paused
    g.over = false;
    g.snake = new Snake(g);
    g.score = 0;
    g.update_score();
    g._intervalID = 0;
    $('.node').remove(); // remove all nodes from html

    $('<div id="node-' + g.snake.body.length + '"></div>')
     .addClass('node tile-start-0')
     .css({'left': 0, 'top': 0,
           'width': NODE_SIZE, 'height': NODE_SIZE,
           'margin': GRID_SPACE})
     .appendTo($('#grid'));
    g.snake.body.push_head(new linked_list.node(g.snake.body.length,0,0));

    $('<div id="node-' + g.snake.body.length + '"></div>')
     .addClass('node tile-start-1')
     .css({'left': 0, 'top': GRID_DIV,
           'width': NODE_SIZE, 'height':NODE_SIZE,
           'margin': GRID_SPACE})
     .appendTo($('#grid'));
    g.snake.body.push_head(new linked_list.node(g.snake.body.length,0,GRID_DIV));
    g.make_item();
}


function check_status() { // check for game over and whether or not add_node
    // check bounds
    if (g.snake.body.head.x < 0 || g.snake.body.head.y < 0 ||
        g.snake.body.head.x >= GRIDX || g.snake.body.head.y >= GRIDY) {
        g.paused = true; // game over
        g.over = true;
        return;
    }

    // check self intersection
    test_self_intersect();

    // check item intersection
    if (g.snake.body.head.x === g.item.x && g.snake.body.head.y === g.item.y) {
        g.snake.body.push_head(g.item);
        display_tip();
        g.make_item();
        g.snake.ate = true;
        g.score = g.score + 1;
    }
}

function test_self_intersect() {
    var current = g.snake.body.tail;
    while (current != g.snake.body.head) {
        if (g.snake.body.head.x === current.x &&
            g.snake.body.head.y === current.y) {
            g.paused = true; // game over
            g.over = true;
            return;
        }
        current = current.prev;
    }
}

/* Display function for sidepane info */
// called when snake acquires an item, descides which tip by game enum
function display_tip() {
    if (pause_on_tile === true) {
        g.paused = true;
    }

    show_description(g.progress); //description.js

    g.progress = g.progress + 1;
}

/* inject messages in middle of grid so they don't all appear at once */
function setup_messages() {
    $('<span class="message" id="start">Spacebar to play.</span>')
        .appendTo('#grid');
    $('#start').hide();
    $('<span class="message" id="continue">Spacebar to continue.</span>')
        .appendTo('#grid');
    $('#continue').hide();
    $('<span class="message" id="end">Spacebar to restart.</span>')
        .appendTo('#grid');
    $('#end').hide();
}

// Detect keyboard keypresses
$(document).keydown(function(event) {
    event.preventDefault();
    event = event || window.event;

    if (event.keyCode == 80 || event.keyCode == 32) { // play/pause, spacebar
        if (g.over) {
            reset();
        } else if (!g.started) {
            g.started = true;
            g.paused = false;
        } else {
            g.paused = !g.paused;
        }
        g.snake.moved = false;
        return;
    } else if (event.keyCode == 82) { // reset, r
        reset();
        return;
    }

    if (g.paused || g.snake.moved === true) { // has player already moved?
        return;
    }

    if (event.keyCode == 38) {
        if (g.snake.direction != 'D') {
            g.snake.direction = 'U';
            g.snake.moved = true;
        }
    } else if (event.keyCode == 40) {
        if (g.snake.direction != 'U') {
            g.snake.direction = 'D';
            g.snake.moved = true;
        }
    } else if (event.keyCode == 37) {
        if (g.snake.direction != 'R') {
            g.snake.direction = 'L';
            g.snake.moved = true;
        }
    } else if (event.keyCode == 39) {
        if (g.snake.direction != 'L') {
            g.snake.direction = 'R';
            g.snake.moved = true;
        }
    }
});

})();

