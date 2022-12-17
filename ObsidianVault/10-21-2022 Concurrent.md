* OpenMP
	* Based on fork-join parallelism with an explicit master thread
	* Thread-count agnostic, set via the command line and is by default the # of hardware threads
	* `#include <omp.h>` and `-fopenmp`
	* `#pragma omp...` signals a command to `omp` (OpenMP) with whatever comes next
	* `#pragma omp parallel` forks a team of threads and runs the next block of code in parallel by all threads. All threads join at the end and terminate
		* In this case, `omp` is the sentinel, `parallel` is the directive name, and everything else are arguments, and must be followed by a newline
		* No magic, data races can still happen with just this
		* Data sharing…
			* Default is shared for everything
			* `default(none)` will get rid of all scope (good practice)
			* `private(x)` gives each thread its own copy of `x`
			* `shared(y)` will share a copy of `y` (data races possible).
		* Work sharing...
			* Constructs within a parallel region which split work
			* Loop/parallel for construct runs a loop in parallel across all threads
				* `#pragma omp for`
				* `schedule(...)` defines how threads should be given iterations
					* `static` given a certain size of work (e.g. 5 iterations), we assign T1 5 iterations, T2 5 iterations, and so on, repeating once we run out of threads.
					* `dynamic` gives the first thread available the next chunk of work (implemented with a task queue)
					* Guided is like `dynamic`, except we will reduce the work-size per thread by some factor over time such that it's more likely that each thread will have work to do as it becomes more likely that we will finish (if we have large chunks, then there is probably going to be only one thread working near the tail end since there won't be any work left for the other threads).
				* Must be formed with `for (initialize; test; increment)`
					* `initialize` cannot change over time
					* `test` must be implemented with `<`, `<=`, `>=`, `>`
					* `increment` can use `i++`, `++i`, `--i`, `i--`, `i+=x`,`i-=x` where `x` doesn't change over time
			* Sections
				* `sections`
				* Put a bunch of blocks tagged with `#pragma omp section`, and each one will be executed by a different thread
				* There is an implied barrier at the end
				* Alternative to `tid == 1`, `tid == 2`, etc.
				* `nowait` will remove the barrier at the end of the block (this normally happens will all work sharing constructs)
			* Single
				* The same as a sections block with one section. Also has an implied barrier
			* Master
				* The same as single, except the thread must be the master. There is no implied barrier
	* Runtime arguments…
		* `omp_get_num_threads`
		* `omp_get_thread_num` gets the current thread ID (starting at 0)
	* Env variables…
		* `OMP_NUM_THREADS`
* Cache Coherence Protocols
	* A memory location is coherent if all threads see the same sequence of values at that location, but these sequences are independent from each other (otherwise, you would have memory coherency)
	* Guarantees...
		* Propogation -- all processors will eventually get the update
		* Serialization -- all processors will get the updates in a consistent order.
	* This is not trivial, since the order in which writes are communicated is not necessarily the same as the order in which they occurred
	* A hardware protocol running on the medium by which writes are communicated between distributed processors which enforces the invariant that there will be only one modifiable copy of the cache line in the system
		* Implicitly enforces a consistent order for the cache
	* Makes data races less cringe
		* You might just get an old value, often it doesn't even impact the result
	* Makes implementing memory coherence easier
		* We don't have to merge potentially divergent values between threads, etc.
	* A read will load a cache-line from DRAM into L3, then L2, then L1 (if it's a inclusive cache system)
		* This will be a read-only cache, which allows other processors to request the cache from close-by processors for greater efficiency
	* Practical coherence looks like this: If we want to write, we need to invalidate all the read-only copies of that cache line in the lowest tier (L1) such that old values aren't read, and then we can mark our cache line as writable and write to it, and eventually trickle up back into DRAM. Once the trickle is done, our cache can become read-only
		* The invalidation can be as simple as deleting them from those caches
		* This is why contention is a big performance issue, because two cores writing to the same cache line will have to constantly run through this process with cache misses each time
	* When we write, we can either invalidate all the read-only copies of that cache line (write-invalidate), or we can get those copies to become consistent with our writable cache line (write-update)
	* Classes of protocols
		* These are imposed by the differing costs for communication (bigger networks have less and less portions of the network being utilized at any given time), and often multiple are used at once
			* If we have a multi-socket machine, we might use broadcast for the L1/2 caches of each socket, source between those sockets, and directory for a distant group of sockets we need to communicate with
		* Snoopy protocols
			* Broadcast for small networks
				* (e.g. single-socket)
				* All nodes hear all requests with a specialized bus. The bus can only accommodate one request at a time, so there is an enforced order
				* Often uses MSI or MESI (**M**odified, **S**hared, **I**nvalid, **E**xclusive)
					* Modified (written to)
					* Shared (read-only)
					* Invalid
					* Exclusive (I have the only cache line in the system, but I haven't written to it)
						* It can be written to extremely easily without using an invalidation protocol
			* Source for medium networks
				* (e.g. multiple sockets)
				* P2P network, but we will often broadcast messages to everyone
				* Often uses QPI (Intel) or MESIF
		* Directory for large networks (this is less popular)
			* P2P network where we have a home node which is tasked with maintaining consistency
			* Everyone communicates with the home node which might point them to another node