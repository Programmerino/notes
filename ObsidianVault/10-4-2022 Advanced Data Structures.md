* Balanced trees (B-Trees)
	* Each node is an array of keys, trees are created for each in-between and before/after. For example [5, 12, 15] will have children nodes for all children lower than 5, between 5 and 12, between 12 and 15, and above 15. This is a multiway tree.
		* The payload is typically an array of pointers to children
	* Used for FSs or large data structures which cannot be entirely loaded into memory
	* $b$ is a constant. Each array will have between $b-1$ and $2b - 1$ elements (the root doesn't have the minimum requirement), so each node has between $b$ and $2b$ children.
		* A BST can be represented as a B-Tree where $b = 1$
		* Nodes with $b-1$ elements are half-full, and nodes with $2b -1$ elements are full
		* High values of $b$ are typically used to align with page sizes so that they are cache efficient (if we load a disk page, we want this to align with one node in the B-Tree to reduce wasted time accessing data we don't need).
			* If it's used to abstract disk data, this is the case, and the payload of each node is an array of pointers to child page nodes.
	* They are perfectly balanced, meaning every path from a leaf to the root is the same length.
	* Empty arrays are banned
	* Find is…
		* Basically the same as a BST search algorithm
		* Complexity is $b\cdot \log_b{n}$
			* This is because $b$ accesses for each level of the tree (the log part)
			* If $b = 1$ is $log_2{n}$
	* Insert is...
		* Just use the BST algorithm until you find a suitable parent...
			* Pretty simple unless the node becomes full
			* If it is already full, split the parent into two subtrees and insert the middle element into the parent of the parent
				* Do this recursively. If you get to the root, you split it like normal and you can have a small root since the minimum requirement isn't there for the root
				* More specifically, follow the path down to the leaf until you find one full node on the way, I'll split the node and push the middle element up. If you do this, when you get down to the leaf and try to insert if it's full, you know you can just do one split and you're done. This algorithm guarantees that only 3 "pages"/nodes need to be in memory at any point in time.
	* Delete is...
		* If it's in a leaf, we can delete as long as it doesn't become too small
			* If it becomes too small, go to a sibling subtree, steal it's leftmost child and modify the parent so that your node can contain it. This can be done if you have an adjacent sibling with more than $b -1$ elements.  Otherwise, you can merge, since you know both nodes will have $b-1$ elements, so... (to be continued)