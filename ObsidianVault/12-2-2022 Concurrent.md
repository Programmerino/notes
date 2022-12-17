* HTM
	* We can exploit the cache coherence protocol by detecting write-invalidation of our cache line for conflict detection
	* Example transaction
		* Load our read locations into our cache line, it becomes part of our read set
		* If we finish our logic and the read set has changed (e.g., it got invalidated, then we abort)
		* If we write and our modified cache lines become invalid, then we also know there's a conflict
	* This is a pessimistic concurrency control method since we are detecting conflicts between transactions at the start or during the execution of the transaction
	* This uses REDO logging where the REDO log is the contents of the local cache. If we have a conflict, will invalidate all our cache lines, otherwise, we allow the cache lines to be flushed.
	* This mechanism provides opacity
	* Issues…
		* We can detect conflicts with cache line granularity. If unrelated values in the cache line change, we will falsely assume there was a conflict.
		* If our write gets evicted from the cache due to capacity or conflict issues, this sets a hard limit on how big a transaction's write set can be.
		* Syscalls and I/O will abort these
		* Because of these, there are some conceivable transactions which will always fail, so we probably want a software fallback for these
	* One implementation is Intel's TSX.
		* `#include<immintrin.h>`
		* A simple transaction implementation would loop until an outer variable is set, and that outer variable will only be set if the transaction completes. In the loop body, wrap everything with `if(_xbegin() == _XBEGIN_STARTED)` to make sure the transaction could be started, and call `_xend()` when you're done.
			* If there is a conflict or other failure, we will invalidate our cache lines, the code will jump back to the conditional which will then fail, causing the transaction to restart
			* Some transactions will always fail due to cache limitations, etc. so we shouldn't infinitely loop
				* Our fallback could be an implementation using a SGL which we try whenever we abort, and for HTM transactions we just abort if the lock is in the LOCKED state (`_xabort()`). This has the secondary effect of making us abort if the lock state changes, because the lock has now joined our read set
					* This creates cycles where under low contention, everyone is using HTM, and then when anyone suffers a failure, the likelihood other transactions will use the SGL increases, so we get a phase of SGL until contention decreases. You can fine tune how many times to try the HTM to abate this.
	* Typically, has 3x less overhead than STM assuming no conflicts