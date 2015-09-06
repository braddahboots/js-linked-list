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

  //creates a new node
  function _createNode(x) {
    return {
      value : x,
      next : null
    };
  }

  //points to our head
  function _getHead() {
    return head;
  }

  //points to our tail
  function _getTail() {
    return tail;
  }

  //takes a new node and adds it to our linked list
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

  //reads through our list and returns the node we are looking for
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

  //reads through our list and removes desired node
  function _remove(num) {
    var curNode = this.get(num);
    var preNode = this.get(num - 1);
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

  //reads through our list and adds a new node in desired index
  function _insert(val, num) {
    var curNode = this.get( num );
    var preNode = this.get( num - 1);
    var tempNode;
    if ( num >= length || num < 0) {
      return false;
    // } else if ( num === length ) {
    //   this.add( val );
    } else if ( num === 0 ) {
      tempNode = _createNode( val );
      tempNode.next = curNode;
      head = tempNode;
    } else {
      tempNode = _createNode( val );
      preNode.next = tempNode;
      tempNode.next = curNode;
    }
    length++;
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
var urlList = linkedListGenerator();
console.log('testbody');
urlList.add(1);
urlList.add(2);
urlList.add(3);
urlList.remove(1);
var testbody = urlList.insert;
console.log(testbody);
for (var propName in testbody) {
  console.log(propName, testbody[propName]);
}
// var movies = linkedListGenerator();
// eyes.inspect(movies.add('star wars'));
// eyes.inspect(movies.add('batman'));
// eyes.inspect(movies.getHead());
// eyes.inspect(movies.getTail());