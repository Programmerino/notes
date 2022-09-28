* Disjoint forests
	* Rank is the # of “children” for root nodes, and is 0 for all “leafs”
		* Therefore, the rank of a node is always greater than the rank of nodes pointing to it
		* The maximum rank of any node is $\log(n)$
	* $log^*(n)$ is the number of times a number can have $\log(n)$ applied to it before becoming less than 1.
	* A tree with rank $k$ has at least $2^k$ nodes.
		* This is no longer true with path compression, since the rank and actual number of child nodes are decoupled
	* The # of nodes with rank $k$ cannot exceed $\frac{n}{2^k}$.
		* This is still true with path compression because the # of nodes has not changed in the find operation.
	* Path compression
		* Group all the nodes on the path from $a$ to the root by their ranks. $G_i$ is the group is all the nodes with rank which follow $\log^*(n)=i-1$. Stop grouping once we put $\log(n)$ into a group (the max possible), or when we get to $\log^*(n)$ groups. Each group contains $k + 1$ until $2^k$.
			* If we alot each group's element $2^k$ potential
* Splay Trees
	* A BST, but when it finds/inserts a node, it replaces the root with that node with rotations. This is the easiest way to move a node up the tree
		* If you consider moving nodes 2 levels up at a time instead of 1 at a time with repeated rotations, the complexity becomes $\log(n)$. This allows the ordering from the original tree to be retained
		* ZigZig is the case where the node is the left-left child of the grandparent. Rotate the node clockwise twice. ZagZag is the same for the right-right child
		* ZigZag does an ACW rotation and then a CW rotation
		* ZagZig does a CW rotation and then an ACW rotation
		* 