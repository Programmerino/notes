* NUMA is Non-Uniform Memory Access and refers to the fact that not all accessible DRAM has the same performance characteristics
	* For example, if you have to go through multiple interconnects to get to a set of DRAM, it is slower
* Caches are faster because they are physically closer, and because they use more expensive memory
* A “3-way cache” refers to the ability to fit three cache lines for each set (most are 8-bytes)
* Cache misses can be
	* Cold misses
		* The first time we use the data
	* Capacity misses
		* There isn't enough room in the cache, so a cache eviction occurs to fit it (least recently used)
	* Conflict misses
		* There aren't enough cache lines available for a set, so we need to evict
		* This can happen if you are using a 2D array with a certain element data size, and you skip by row
	* [[9-28-2022 Concurrent|Contention misses]]
* CPUs often perform prefetching, which is when they recognize a pattern of data access and “prefetch” what they expect will be asked for into the cache ahead of time
	* In a stream, it will fetch the next line (e.g., an array), and in stride, it will skip an amount and fetch
		* On Intel, any access will prefetch one more line on the assumption it's a stream
	* This means that you can avoid cold cache misses if you exploit prefetching, which is why array traversal is fast and why skipping to columns in an array is OK (stride).
	* Linked lists destroy this.
* Cache locality can be…
	* Temporal
		* If you are going to reuse pieces of memory, you should reuse them within a short time period
			* For example, a processor might cache the iterator in a loop
	* Spatial
		* If you are making many memory accesses, they should be near each other in memory.
	* Compilers might try to optimize for these.
* In C, arrays are stored in row major order, which means the right most indices are adjacent.
* A process consists of...
	* System resources
	* A section of memory
	* Security attributes
	* The processor state
* A thread is an executing instance of a sequential sequence of instructions and is distinct from a process since...
	* A single process can have multiple threads which share
		* Global variables
		* The heap
		* PID, page permissions, file descriptors, and UID/GID
		* Not stacks, registers, stack pointers, return values, or priority
* Hardware threads are the same as Linux cores
* On Linux, processes and threads are both tasks and are both scheduled and created the same way
* Multitasking is the illusion provided by the OS of executing multiple tasks on the same core seemingly simultaneously and is the result of context switching
	* This can provide better performance even when parallelism isn't used because of asynchronous instructions (the program itself may not be using it asynchronously, but the OS can figure it out), like stalling caused by disk reads/writes
* The scheduling policy is the algorithm used by the scheduler. It might consider...
	* Task priority
	* Time slice
	* I/O and other long latency operations (async stuff)