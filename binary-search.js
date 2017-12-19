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
}

module.exports = BinarySearchTree;