* Deadlock is a safety and liveness concern because it is usually a safety concern in the real world (DoS, etc.), and is obviously bad for liveness because threads will never progress
* For data structures, progress means the method returns and for transactional systems, progress means the transaction commits.
* Blocking is when one thread requires another thread to execute in order for the system to progress (can be done with locks, barriers, condition variables, etc.)
	* Systems using blocking require threads to run within a reasonable amount of time, and to not halt or crash. If these things happen, the entire system will hang.
* Blocking algorithms are live if they don't deadlock, have no infinite loops inside critical sections, and all threads continue to execute
* Nonblocking algorithms/primitives don't block, meaning threads are never reliant on each other to make progress. Primitives that achieve this includes CAS, FAI, and TAS
	* There are levels to nonblocking progress for an algorithm:
		* Wait-freedom (strongest)
			* No blocking, livelocks, or thread starvation
			* In other words, if all threads will always be progressing within a finite number of their own steps
			* Priority inversion is impossible, starvation, livelock, and deadlock can't happen
		* Lock-freedom
			* Wait-freedom, but starvation is allowed
			* In other words, if the system as a whole will progress within a finite number of steps
			* Blocking gets a little tricky, but a good way to determine if an algorithm is lock-free is to know if in the worst-case the system will progress in finite steps
			* Hung threads never stop system progress, livelock never happens
		* Obstruction-freedom (weakest)
			* Like lock-freedom, but livelock is allowed
			* In other words, if all threads except one stop executing, that thread will make progress in finite steps
			* Having a randomized scheduler effectively will lead to progress, and is easy to build
* Treiber stack is a linearizable, lock-free stack
	* Push
		* Make a new node with the new value
		* Load the current top and set the down member of our new node to that (pointer swing)
		* Use a CAS to try to swap the top with our new node. That way, if two nodes simultaneously push, one will change the top and the other will change the top after, with the down pointer going to the earlier pushed value
	* Pop
		* Get the top, if its null, return null because the queue is empty
		* Get the down node and the value of the top
		* Use a CAS to try to make the down node the new top, and once we succeed, return
	* The CAS is the linearization point in both (or earlier if the queue is empty for pop)
	* CAS only fails if `top` has changed since we calculated our change based on it. It is lock-free because we know that if we fail, that implies another thread progressed. We could get starved, though, so we aren't wait-free.
* ABA problem
	* For nonblocking algorithms, a pointer targets A, then B, then goes back to A while the underlying state may have changed significantly (A may be deallocated). The CAS will still act as if they are the same in this instance though
	* One solution is load-linked and store-conditional (not in x86 or C++)
		* Load-linked loads a value from a memory location, and store conditional stores to the same location if the value from load-linked is entirely unchanged.
	* The most common solution is a counted pointer
		* Each pointer has a count, then CAS will know they aren't the same. One way is to use an u64 to store 32-bits to act as your pointer, and 32-bits for the counter (set your memory space to 32-bits when compiling)