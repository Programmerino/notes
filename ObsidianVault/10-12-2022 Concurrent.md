* The `thread_local` keyword makes global variables isolated to each thread
* In C++, you can have local static variables which are persistent across function calls. `thread_local` can achieve a similar purpose, but they are isolated between threads
* Sense Reversal Barrier
	* Each thread flips its local sense, and when everybody has flipped their own local sense, we can continue
	* Specifically
		* Get our local sense and calculate the inverse
		* Acquire a global lock, increment the global count (how many threads waiting), and check if we are the last thread expected. If we are, reset the count, unlock the mutex, and store the inverse sense into a global atomic. Otherwise, unlock and spin while waiting for the global sense to flip
			* Instead of a lock, you can use a fetch-and-increment atomic operation (keep in mind, this returns the old value, so instead of checking if it is `n` we would check if it is `n - 1`)
* We can reduce contention by using a combining tree (elaborate)
* Condition variables
	* Have an interface of wait, signal, and broadcast