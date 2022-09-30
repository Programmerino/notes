* Atomic stores should be written to atomically and loaded atomically, since the load could read a part before the atomic write and a part after
* A memory location is coherent if all threads see the same sequence of values there. C/C++ variables are not coherent by default.
	* In distributed databases, coherency is an issue where a reader sees two different values from the first database written to and other databases which haven't seen the change yet.
* Most shared memory systems enforce coherent cache lines, but the compiler doesn't guarantee it unless requested.
	* This is enforced by the “cache coherency protocol”
		* This essentially just uses a shared lock, which form partial orders (total orders expect for reads being incomparable)
* C++ has the `atomic<T>` class which provide read/write atomic `load()` and `store()` operations.
	* `memory_order_relaxed` is the baseline level of conditions for the store/load. This means that after `load()` is run, any values before what was loaded cannot come up in future loads.
* There is an additional cache miss to what was previously described...
	* Contention occurs when two cores write to the same cache line at the same time which can cause the cache coherency protocol to preform very poorly and cause cache misses.