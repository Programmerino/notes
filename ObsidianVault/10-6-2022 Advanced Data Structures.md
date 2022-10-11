* Deletion when the target is not in a leaf, we replace $k$ with the rightmost element of the left neighbor subtree of that element (removing the initial copy)
	* However, if the subtree becomes too small, yoink an element from a right sibling by moving it's leftmost element into c' (the right sibling parent), and moving c (the subtree parent) at the end of the current array. Doing it with the left sibling is a little better for performance reasons
		* This only works if the siblings are more than half-full. Otherwise, we merge...
			* We take the two subtrees of the parent element, put $c$ in the middle (conceptually, but we don't actually do this since we don't want $c$ anymore), but because we removed $c$, we won't be full because we only do this when both trees are half-full.
* B*-trees are B-trees, but the minimum bound is $\frac{2b}{3} - 1$ 
* B+- tree are like B-trees, but data is always stored at leafs (the key is propogated down from non-leafs), and a non-leaf only has pointers to subtrees
	* There is duplication of keys across all the children, but it means we store all the data in a single doubly-linked list. 
* RB tree, $b$ is the number of nodes per child
	* Root is black,
	* The number of black nodes encountered on the path from a leaf to the root is always the same
	* A B-Tree (234?) is transformable into this...
		* Take an element, make it the root, and make the left and right siblings left and right children, and keep the subtrees of those children. The root is black, the children are red
			* If only the left sibling is available, make the left sibling a red child on the left, apply the algorithm on the right subtree and the subtrees of the left child
			* If only the right sibling is available, make the right sibling a red child on the right, apply the algorithm on the left subtree and the subtrees of the right child
			* If you recursively apply this to transform the entire tree, it will satisfy the RB restrictions because a red child's nodes will always be red so it doesn't contribute to the black count. There will only be one black increase per node in the B-tree since only the root is black.
	* It can be transformed back into a B-Tree...
		* When you encounter a black node, make an array where the black node contents is sandwiched between the children of that node.
* Therefore, RB trees are isomorphic to 234 trees. Because of this, we can use the same algorithm for a 234 tree insertion