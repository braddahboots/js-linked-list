/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  var head = null;
  var newNode = {};
  var tail = null;

  function createNode(x) {
    return {
      value : x,
      next : null
    };
  }

  function _getHead() {
    return head;
  }

  function _getTail() {
    return tail;
  }

  function _add(x) {
    var newNode = createNode(x);
    if (_getTail() === null) {
      head = newNode;
    } else {
      _getTail.next = newNode;
    }
    tail = newNode;
    return newNode;
  }

  function _get(find) {
    var curNode = _getHead();
    if (curNode === null) {
      return false;
    }

    // looping through value
    if (find === 0) {
      return curNode;
    }
    for (var i = 1; i < find; i++) {
      if(curNode.next === null) {
        return false;
      }
      // if we find the value we return it
      curNode = curNode.next;
    }
    if (curNode === undefined) {
      return false;
    } else {
      return curNode;
    }
  }
  function _remove() {
    // return
  }

  function _insert() {
    // return
  }
  return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };
}
