* An indicator function takes a condition/event and returns 1 if the condition is true or the event happens and 0 otherwise
	* The expected value is just the probability
* Cuckoo hashing uses two hash tables and two hash functions, one for each able. When inserting a value, we try to insert it into the first hash table and if it is already full, we try to insert it into the other hash table. If both are filled, we evict the slot in the first hash table and place our new value in place of it and try to place the old value in the other table. If a slot in the other hash table needs to be evicted, we repeat the process. 
	* When we lookup a value, we look in the first hash table with the first hash function and then the second hash table with the second hash function
	* There is a chance of an infinite loop, so we use a constant max eviction value. When we evict more than 10 slots, we choose new hash functions for both hashtables, clear both hashtables, and reinsert the old values into the new hashtables.
		* Infinite loops become very likely when the hashtable is more than half full
	* An eviction graph hash each edge refering to where the value would go in the other hash table if evicted
	* In practice, this has constant-time lookup and is an alternative to perfect hashing
* A naive solution for counting creates an array of counters (w of them) initialized to 0 and chooses a hash function from a universal hash family. Whenever we want to increment a key's counter, we hash the key and increment the counter the hash points to
	* Whenever we want to count a key, we just hash it and read the slot counter
* A count-min sketch instead creates d of the above naive hash tables, each with their own hash function. Whenever a key comes in, we increment the associated counter of each hash table. To count a key's count value, we find the minimum value of the counters, which likely had the fewest collisions. The estimate will always be greater or equal to the true counter for the key
	* If we set a target margin multiplier (for example, we are OK with having 110% of the true value, etc.) which is epsilon, we can choose values for d and w under the pretense of having a certain probability for exceeding this margin, which is delta.
		* $P_t(\hat{C}_k > C_{k} + \epsilon N) < \delta$
		* The expected count is the real count plus the sum of every other key's probability colliding times the amount of times the key actually occurs
			* This is the same as $C_k + \frac{1}{w}\cdot N$
		* We eventually find that this becomes $\frac{1}{w\epsilon}^d < \delta$. You want $d\epsilon$ to be as small as possible since that represents memory usage
			* You could select w such that $\ln w\epsilon$ is 1 by making $w = \frac{e}{\epsilon}$.
* The Markov inequality states that Pr(x >= k) <= E(x)/k when x is non-negative
* 