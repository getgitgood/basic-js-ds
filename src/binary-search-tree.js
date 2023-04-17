const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.woot = null;
  }
  
  root() {
    return this.woot;
  }

  add( data ) {
    const newNode = new Node(data);
    if (!this.woot) {
      this.woot = newNode;
      return
    }
    let currNode = this.woot;
    
    while (currNode) {
      if (newNode.data > currNode.data) {
        if (!currNode.right) {
          currNode.right = newNode;
          return
        }
        currNode = currNode.right
      } else {
        if (!currNode.left) {
          currNode.left = newNode;
          return
        }
      currNode = currNode.left;
      }
    }
  }

  has( data ) {
    let currNode = this.woot
    
    while (currNode) {
      if (data === currNode.data) {
        return true;
      }
      if (data > currNode.data) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left
      }
      if (!currNode || !currNode.left && !currNode.right && currNode.data != data) {
        return false;
      }
    }
  }

  find(data) {
    let currNode = this.woot;
    
    while (currNode) {
      if (data === currNode.data) {
        return currNode;
      }
      
      if (data > currNode.data) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left
      }
      if (!currNode || !currNode.left && !currNode.right && currNode.data != data) {
        return null
      }
    }
  }

  remove( data ) {
    this.woot = this.deleteNode(this.woot, data)
  }
  
  deleteNode(node, data) {
    if (node === null) {
      return null
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data)
    } else if (data < node.data) {
      node.left = this.deleteNode(node.left, data)
    } else {
      if (!node.left && !node.right) {
        node = null;
      } else if (!node.right) {
        node = node.left
      } else if (!node.left) {
        node = node.right
      } else {
        const temp = this.minNodeSrch(node.right);
        node.data = temp.data;
        node.right = this.deleteNode(node.right, temp.data)
      }
    }
    return node
  }
  
  minNodeSrch(node) {
    if (node.left === null) {
      return node
    } else {
      return this.minNodeSrch(node.left)
    }
  };
  
  min() {
    let currNode = this.woot;
    while (currNode.left) {
      currNode = currNode.left
    }
    return currNode.data;
  }

  max() {
    let currNode = this.woot;
    while (currNode.right) {
      currNode = currNode.right
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};