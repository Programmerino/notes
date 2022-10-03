* Coherence is only guaranteed per atomic variable, but atomics don't provide consistent ordering between stores and loads among multiple atomic variables because…
	* The compiler and CPU might reorder them
* Memory consistency defines how accesses to different locations interleave
	* Specified by the language and the ISA
	* Three schemes (C++) are
		* Relaxed (only coherence and read/write atomicity)
		* Sequential consistency (most strict)
			* All atomic accesses have a total order in the sequenced-before order and non-atomic instructions are followed in the sequenced-with edges (runtime-determined)
				* Every atomic access is globally, totally, ordered and non-atomic accesses are unordered between these accesses
		* Release consistency (most relaxed)
	* Schemes should not be mixed
* Synchronizes-with arrows means that the source of the arrow must be higher-ordered than their destination (e.g. the source happens before the destination)
* Intra-thread Happens-before order is the order in which an instructions side effects become visible to other threads
	* If I have two non-atomic instructions before a store/load, they can happen in any order but both must happen before the atomic instruction