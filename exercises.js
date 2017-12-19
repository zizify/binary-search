const BinarySearchTree = require('./binary-search');

const letterTree = new BinarySearchTree();
letterTree.insert('K', 0);
letterTree.insert('C', 0);
letterTree.insert('A', 0);
letterTree.insert('B', 0);
letterTree.insert('R', 0);
letterTree.insert('U', 0);
letterTree.insert('T', 0);
letterTree.insert('Y', 0);
letterTree.insert('F', 0);
letterTree.insert('Z', 0);
letterTree.insert('O', 0);
letterTree.insert('S', 0);
letterTree.insert('R', 0);

let height = binary => {
	let node = binary;
	if (node === null) {
		return 0;
	}
	let h1, h2;
	h1 = 1 + height(node.left);
	h2 = 1 + height(node.right);
	if (h1 > h2) {
		return h1;
	}
	return h2;
};

console.log(height(letterTree));




