* Use a rolling hash function for the substring problem, write test cases
* HW due on the 15th
* Open address hash tables are an alternative to chaining
	* Each slot contains only one key or one key and value
	* When inserting into a slot, if the slot is empty, it works normally. If there is a collision, however, we keep incrementing the slot index until we find an empty slot (or wrap around if one isn't found).
		* This process is called a linear probe
	* To determine if the key is in the hashtable, search from the starting slot until you find an empty slot (the key is not in the hashtable) or the key
		* If you allow deletion, an empty slot might be found and the algorithm wrongfully says the key isn't there
		* One solution is lazy deletion which adds a bit to each slot to indicate if it was previously deleted. If it was previously deleted, it is considered non-empty but doesn't contain a key. It is actually deleted whenever the hash table needs to be reallocated or remade
	* It has better cache locality than in chaining, so the search ends up being faster than using a LL-based solution
	* If certain slots are hashed to more than others, performance can become poor
		* To avoid this, we can use non-linear probing
			* A hash table is built with a hash function which hashes together the key and the probe sequence number (starts at 0 and is incremented each time the hash function runs)
				* In double hashing, the function is $(h_1(x) + ix\cdot h_2(x)) \mod m$.
					* $h_2(x)$ returns a number between 1 and m-1 and is how many slots the probe moves at each step. If m is a prime number, we are guaranteed that each slot will eventually be visited
						* For example, if m is 7 and h1 hashes to 2, the probe sequence is 2, 5, 1, 4, 0, 3 ,6
					* There is still some cache locality as long as $h_2$ yields small numbers
					* A solution using this method performs about as well as chaining
					* The expected number of jumps necessary to finish a find operation is 1/(1 - $\alpha$) where $\alpha$ is the load factor (assuming that the hash function provides uniformity the hash table slots)
					* The size of the hash table has to be prime, so you can choose a $w$ for $2^w - 1$. If the number isn't prime or you don't test for it, it is generally ok but could lead to an infinite loop with very low probability.
						* You can solve for the infinite loop by counting the number of cycles to determine if it becomes longer than the hash table
			* This is more performant than hash tables using linear probing
* Perfect hashing has high probability of O(1) performance
	* It requires that the keys are provided up front, and finds an optimal hash function which won't have any collisions
		* This can be done given any universal hash family
	* The number of slots is the number of keys squared, and thus the probability of a collision is n(n-1)/2 * 1/n^2 which is always less than half
	* The algorithm goes through all hashes in the hash family and keeps going until there are no collisions. Because of the probability above, it should complete quickly (probably 2 times gets you there)
* 2 level hash table
	* The first level has keys provided up front. A random hash function is taken from the hash family. There will be n slots. It collects all the collisions for those keys, and slots which have collisions then are connected to second-level hash tables of size k^2 where k is the number of collisions and perfect hashing is applied.
	* This still provides O(1) operations
	* To do this dynamically, we provide the hash table with the number of keys expected to be inserted for the top-level hash table, and then it can recreate the level-two hash tables when collisions occur. This is still O(1).