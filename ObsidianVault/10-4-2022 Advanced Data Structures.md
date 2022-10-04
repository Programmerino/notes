* Balanced trees (B-Trees)
	* Each node is an array of keys, trees are created for each in-between and before/after. For example [5, 12, 15] will have children nodes for all children lower than 5, between 5 and 12, between 12 and 15, and above 15. This is a multiway tree.
	* Used for FSs or large data structures which cannot be entirely loaded into memory
	* $b$ is a constant. Each array will have between $b-1$ and $2b - 1$ elements (the root doesn't have the minimum requirement), so each node has between $b$ and $2b$ children.
		* A BST can be represented as a B-Tree where $b = 1$
		* Nodes with $b-1$ elements are half-full, and nodes with $2b -1$ elements are full
	* They are perfectly balanced, meaning every path from a leaf to the root is the same length.
	* Empty arrays are banned