* Release Consistency
	* Tries to be a little less strong than SEQCST, and is much cheaper to implement in hardware
	* `memory_order_release`
		* Typically used in a store
		* Ensures all memory changes event-ordered before the instruction are visible to other threads, and then updates the synchronization variable. It's like SEQCST, but doesn't prevent other memory accesses going above the instruction or anything after the instruction.
			* A corollary of this is that there are no synchronizes-with edges between distinct stores (unlike in SEQCST)
	* `memory_order_acquire`
		* Only enforces a synchronizes-with edge with the previous store
	* `acq_rel`
		* Imposes the requirements of both `release` and `acquire`.
	* A mutex can be implemented more efficiently using these orders
		* With TAS, we would use ACQREL on the lock and REL on the unlock
	* Additional event order rules are...
		* If A comes before B in the program order and B is a RELEASE store, then A comes before B in the event order
			* Don't migrate down
		* If A comes before B in the program order and A is an ACQUIRE load, then A comes before B in the event order.