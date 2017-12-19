class BinarySearchTree {
	constructor(key=null, value=null, parent=null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}
    
	insert(key, value) {
		//if there is nothing in the BST, we set the input value to be our root
		if (this.key === null) {
			this.key = key;
			this.value = value;
		}
		// starting to insert going left
		else if (key < this.key) {
			// if there is no left node, create new node at this.left
			if (this.left === null) {
				this.left = new BinarySearchTree(key, value, this);
			}
			// else, insert below left node
			else {
				this.left.insert(key, value);
			}
		}
		// if it's not going left, it must be going right
		else {
			// if there is no right node, create new node at this.left
			if (this.right === null) {
				this.right = new BinarySearchTree(key, value, this);
			}
			// else, insert below right node
			else {
				this.right.insert(key, value);
			}
		}
	}
    
	get(key) {
		// if the key matches the root, return the root's value
		if (this.key === key) {
			return this.value;
		}
		// if we need to go left and a left node exists, we recursively call get on this.left
		else if (key < this.key && this.left) {
			return this.left.get(key);
		}
		//if we need to go right and a right node exists, we recursively call get on this.right
		else if (key > this.key && this.right) {
			return this.right.get(key);
		}
		else {
			throw new Error ('ZOMG there\'s a key error!!!1');
		}
	}
    
	remove(key) {
		if (this.key === key) {
			if (this.left && this.right) {
				const successor = this.right._findMin();
				this.key = successor.key;
				this.value = successor.value;
				successor.remove(successor.key);
			}
			else if (this.left) {
				this._replaceWith(this.left);
			}
			else if (this.right) {
				this._replaceWith(this.right);
			}
			else {
				this._replaceWith(null);
			}
		}
		else if (key < this.key && this.left) {
			this.left.remove(key);
		}
		else if (key > this.key && this.right) {
			this.right.remove(key);
		}
		else {
			throw new Error('Key Error');
		}
	}

	_replaceWith(node) {
		if (this.parent) {
			if (this === this.parent.left) {
				this.parent.left = node;
			}
			else if (this === this.parent.right) {
				this.parent.right = node;
			}
			if (node) {
				node.parent = this.parent;
			}
		}
		else {
			if (node) {
				this.key = node.key;
				this.value = node.value;
				this.left = node.left;
				this.right = node.right;
			}
			else {
				this.key = null;
				this.value = null;
				this.left = null;
				this.right = null;
			}
		}
	}

	_findMin() {
		if (!this.left) {
			return this;
		}
		return this.left._findMin();
	}
}

module.exports = BinarySearchTree;

// let binary = new BinarySearchTree();
// binary.insert('E', 0);
// binary.insert('A', 0);
// binary.insert('S', 0);
// binary.insert('Y', 0);
// binary.insert('Q', 0);
// binary.insert('U', 0);
// binary.insert('E', 0);
// binary.insert('S', 0);
// binary.insert('T', 0);
// binary.insert('I', 0);
// binary.insert('O', 0);
// binary.insert('N', 0);

// console.log(binary.get('E'));
// console.log(binary.remove('E'));

// console.log(binary);

