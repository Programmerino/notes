* Peterson's algorithm (implementation of mutex)
	* `desires` is an array of boolean atomics which maps TID to whether or not they want the lock (initialized to false)
	* `turn` is an int atomic which stores which thread will get the thread next (initialized to first thread)
	* `lock`…
		* Sets that thread's bool in desires to true
		* Sets the turn to the other thread
		* We loop as long as the other thread desires the lock and it's that thread's turn. When it unlocks, it will lose the desire and the loop will  stop
	* It doesn't scale to more than 2 threads well
* Atomic operations read and write to a memory location in one operation (untearable)
	* Test-and-set (tas) inverts a flag if it is false and returns true, otherwise returns false. The return value means "did the instruction switch false to true" a opposed to false meaning "it was already true"
		* This makes it very easy to implement a lock. The locker simply checks an atomic bool with `tas` until it becomes true, and the unlocker sets the bool to false, which causes a waiting lock to flip the flag and run its critical section.
			* These need to use sequential consistency since the critical section should not be moved out from between lock and unlock
	* fetch_add/\_sub/\_and/\_or get the old value of an atomic, apply the operation to the value, and return the old value.
	* Load-linked/store conditional are supported on some architectures (particularly ARM)
		* Load-linked loads atomically and store conditional stores atomically as long as a load-linked value hasn't changed yet
	* `cas` atomically checks if a value is what you expected, and if it was, you change it to a new value and return true. Otherwise, return false.
		* Can be used to implement `tas` (it checks for false and sets it to true if it was false)
		* Can be used to implement `fetch_XXX` (keep getting the old value until it is the same found during the `cas` operation and carry out the change)
	* `vcas` returns the old value instead
	* In C++…
		* `compare_exchange_strong` takes an expected value and a desired value. If expected wasn't true, it changes expected to the actual found value and returns false. If it was, it sets the new value to desired and returns true.
			* A lock implementation with this would loop, initializing a new expected bool each iteration and would break when `compare_exchange_strong(expected, true)` returns true.
		* `compare_exchange_weak` is cringe.