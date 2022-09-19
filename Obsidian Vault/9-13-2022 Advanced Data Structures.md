FULLY SAVED

* HW: If you can't beat the built-in hash function, explain why
	* Look at how many collisions are happening, etc.
* To add 1 to a bitstring, move left from the right-most bit until 0 is encountered, turning 1s to 0s on the way, and then turn the 0 into a 1
	* This algorithm is worst-case O(n)
* Dijkstra's algorithm finds the shortest path in a directed graph with non-negative weighted edges
* Amortized analysis is distinct from average-case since amortized execution is deterministic while using worst-case complexity.
	* A good thought process is dollar cost. For a stack, we can assign each element 2 dollars when they are pushed which covers both the cost of creating it, and a future cost of popping it. When we later pop n elements, we can say it is O(1)
		* For a bit counter, when we flip a 0 to 1, we give it $2. 1 pays off the first bit flip, and 1 will pay off a future bit flip back to 0
		* This is the potential method, which gives every data structure instance "potential", which is a non-negative number. The potential is the total money from the banker's method.
			* The amortized cost of an operation is the change in potential the operation induces plus the actual cost of the operation
				* When defined this way, and we consider the sum of many amortized operations, it is a telescoping sum which ends up being $\sum C_i + \phi_n$. This will always be greater than the true sum of costs, so if we can bound the amortized costs, we effectively bound the true sum of costs.