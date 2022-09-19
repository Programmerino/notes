* The potential of a data structure always starts at zero
* If you start a dynamic array at one element, capacity 2 and you duplicate capacity every time capacity is reached, the number of elements will never be less than half the capacity
* Heaps/priority queues support
	* Insertion (insertions after increase priority)
	* Finding the minimum priority key
	* Delete a key
* Most heaps are array-based
	* They are trees in which each node's value is less than either child (min-heap ordered heap)
	* Insertion is O(log(n))
	* Find-min is O(1)
		* Just look at the root
	* Deletion is O(log(n))
	* Merge is O(n)
	* These are balanced by necessity
* An alternative which has more efficient merge is...
	* You just need merge to implement everything else
		* Insertion is merge with a single-node tree
		* For deletion, you can merge the left and right subtrees of the deleted node
	* Merge finds the lower root, and merges the other root and its right subtree with the right subtree of itself recursively
		* After all is done, we swap the left and right subtrees at each level, starting from the top. This is self-balancing
			* The count of a node is 1 + the number of nodes below it
			* A node is heavy if the count of the node is more than half of the count of it's parent (they account for more than half the node count of the parent)
				* A node is light otherwise
			* 