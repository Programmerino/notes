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
	* 