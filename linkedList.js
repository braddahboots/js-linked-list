/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
// var eyes = require('eyes')

function linkedListGenerator() {
  var head = null;
  var newNode = {};
  var tail = null;
  var length = 0;

  function _createNode(x) {
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
    var newNode = _createNode(x);
    if (_getTail() === null) {
      head = newNode;
    } else {
      _getTail().next = newNode;
    }
    tail = newNode;
    length++;
    return newNode;
  }

  function _get(find) {
    var curNode = this.getHead();
    var counter = 0;

    while ( counter < find) {
      if (curNode === tail) {
        return false;
      }
      curNode = curNode.next;
      counter++;
    }
    return curNode;
  }

  function _remove(num) {
    var curNode = _get(num);
    var preNode = _get(num - 1);
    if (num >= length) {
      return false;
    }
    if (num === 0 && length === 1 ) {
      head = null;
      tail = null;
    } else {
      if ( num === 0) {
        head = curNode.next;
      } else if ( num === length - 1) {
        tail = preNode;
        preNode.next = null;
      } else {
        preNode.next = curNode.next;
      }
    }
    length--;
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
console.log('testbody');
var testbody = urlList.getHead();
for (var propName in testbody) {
  console.log(propName, testbody[propName]);
}
// var movies = linkedListGenerator();
// eyes.inspect(movies.add('star wars'));
// eyes.inspect(movies.add('batman'));
// eyes.inspect(movies.getHead());
// eyes.inspect(movies.getTail());