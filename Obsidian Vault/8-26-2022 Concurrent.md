Left at: 1:15 PM
Arrival: 1:26 PM
Start Time: 1:26 PM

* The L3 cache is typically shared between cores while the L1 and L2 caches are typically private to each core
	* Information from private caches can be directly copied to other private caches 
* The iMC (integrated memory controller) is inside the CPU and is used to communicate with DRAM
* The interconnect controller communicates with other sockets, remote DRAM, and I/O devices
* Processors will often execute instructions which don't depend on each other in parallel. For example, if you were to execute two moves to move two memory values into registers, the processor might do both at the same time and wait for the moves to finish before executing the instruction depending on the moves. This is called instruction-level parallelism (ILP)
* SMT (Simultaneous multi-threading) is technology which allows multiple threads to run on the same core
	* Hyperthreading on Intel
	* Registers in hyperthreads on the same core are rewritten to mean different registers
* The development of caches (and other memory hierarchy techniques) is mostly because memory has grown faster much slower than processors
	* Registers, L1, L2, and L3 are typically implemented with SRAM. L3 is slower than L2, for example, because it is more distant from the core
	* The compiler can't explicitly control caches, although it can give hints to the processor which aren't necessarily followed. Programs can also be written in ways that optimize cache hits (localization, etc.)
* Most architectures use a 64-byte cache line
* In a coherent system, only one modifiable copy of a cache-line at any time.
* Inclusive caches contain all cache-lines that its descendants contain, while exclusive caches don't.