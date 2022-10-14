* Heaps are a collection of keys supporting...
	* Insert
	* Finding the minimum
	* Deleting the minimum
	* "Meld" or combining two heaps
	* Deleting a node
	* Used in...
		* Dijkstra's algorithm
		* Top-k elements of a list
		* Priority queues
	* Regardless of implementation, at least one of insertion and deletion must take $O(n\log n)$ since all comparison-based sorting algorithms have this complexity in the worst-case.
		* For constant-bit datatypes, we can use radix sort (non comparison-based) which compares each bit column to sort them. This is $O(n)$
* For binary heaps...
	* Insert is $O(\log n)$
	* Find-min is $O(1)$
	* Delete-min is $O(\log n)$
	* Meld is $O(n)$
	* Delete is $O(\log n)$
	* Decrease-key (used in Dijkstra's algorithm) is $O(\log n)$
* Fibonacci heaps make a lot of these operations constant time (amortized)...
	* Insert is $O(1)$
	* Find-min is $O(1)$
	* Delete-min is $O(\log n)$
	* Meld is $O(1)$
	* Delete is $O(\log n)$
	* Decrease-key is $O(1)$
* Binomial heaps...
	* A forest of binomial trees
		* The size (number of nodes) is always a power of two
		* They have an inductive definition where the base case is a single node and $B_1$ is a root with one child. Every tree $B_k$ is the linking of the last tree with itself
			* Linking is done by making the subtree with a smaller root the rightmost child of the bigger root
			* Another way of thinking about this is that each child of the root is a binomial tree, starting at $B_0$ at the leftmost child, ending with $B_{k-1}$ at the rightmost child
		* A pointer to the minimum element is maintained
		* There is at most one binomial tree of any given size.
		* The biggest size binomial tree will be $\lceil{\log_2(n)}\rceil$
	* Insert is done by...
		* Make a singleton tree, and if another singleton exists, merge them. Do this recursively until the invariant of one binomial tree of a size is satisfied.
		* This works like binary addition. Given the node-# in binary, each place is associated with a binary tree size which will need to be present. Inserting is just adding 1 to the previous node count
		* Melding is done similarly
			* Keep in mind, binomial tree addition/linking is not commutative
	* To delete, just remove the associated node and the children trees just become trees to reinsert. If it is farther down in the tree, replace the node's value with the parent's value until the root is reached ???. This is $O(\log n)$
* Dijkstra's algorithm
	* Insert the starting node into the heap with priority 0, insert everything else with infinite priority. The insertion yields a pointer to the heap node, so we associate each vertex in the directed graph with the returned node.
	* In a loop
		* Delete the minimum node, and find all the adjacent neighbors to that node.
			* Add the distance with the weight of the connection to the node. If the value is higher than...
* Fibonacci heaps
	* Like a binomial heap with laziness
	* Insert just adds the singleton to the linked list of trees with no extra work ($O(1)$) while keeping track of the minimum value
	* Melding just appends the linked list of the second heap to the first, keep the smaller of the two minimum values
	* 