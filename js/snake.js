function Snake(g) {
    this.g = g;
    this.ate = false;
    this.moved = false;
    this.body = new linked_list();
    this.direction = 'D';
}

Snake.prototype.move = function() {
    // traverse linked list and update all links
    if (this.ate === true) {
        this.ate = false;
        if (this.direction === 'U') {
            this.body.head.y = this.body.head.y - GRID_DIV;
        } else if (this.direction === 'D') {
            this.body.head.y = this.body.head.y + GRID_DIV;
        } else if (this.direction === 'L') {
            this.body.head.x = this.body.head.x - GRID_DIV;
        } else if (this.direction === 'R') {
            this.body.head.x = this.body.head.x + GRID_DIV;
        }
        $('#node-' + this.body.head.id)
            .css({'left': this.body.head.x, 'top': this.body.head.y});
        return;
    }

    var current = this.body.tail;
    while (current != null) {
        if (current === this.body.head) {
            if (this.direction === 'U') {
                this.body.head.y = this.body.head.y - GRID_DIV;
            } else if (this.direction === 'D') {
                this.body.head.y = this.body.head.y + GRID_DIV;
            } else if (this.direction === 'L') {
                this.body.head.x = this.body.head.x - GRID_DIV;
            } else if (this.direction === 'R') {
                this.body.head.x = this.body.head.x + GRID_DIV;
            }

            // if the last move ate an item, only move head
        } else {
            current.x = current.prev.x;
            current.y = current.prev.y;
        }
        $('#node-' + current.id).css({'left':current.x, 'top':current.y});
        current = current.prev;
    }
}

