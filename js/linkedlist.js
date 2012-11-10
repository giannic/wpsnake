function linked_list() {}

linked_list.prototype = {
    length: 0,
    head: null,
    tail: null
};

linked_list.prototype.push_head = function(node) {
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    this.length++;
};

linked_list.node = function(id, x, y) {
    this.prev = null;
    this.next = null;
    this.id = id;
    this.x = x;
    this.y = y;
};
