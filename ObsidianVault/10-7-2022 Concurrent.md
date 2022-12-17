* Relaxed accesses can happen in any order among themselves without other ordering constraints
	* Generally used for variable initialization
* TAS locks spins until the flag is false, sets it to true, and returns
	* Unlock stores false to the flag
	* Test-and-test-and-set is better to avoid contention cache misses since it doesn't write to memory unless it needs to happen
	* Both of these make it highly likely that the releasing thread reacquires the lock if there is a race for the lock due to already having the cache-line. This makes it massively unfair
		* This follows a LIFO model which might create bottlenecks while having more cache hits. A FIFO model would guarantee fairness, would prevent starvation, but would be more likely to have cache misses
* An example of a FIFO lock is the ticket lock
	* Get the current next_num (my_num)
	* Increment next_num
	* Wait for now_serving to become my_num
	* Unlocking simply increments now_serving
	* The problem is that it promotes cache misses
* 