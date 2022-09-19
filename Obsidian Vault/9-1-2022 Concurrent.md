FULLY SAVED
* Fork-join is the simplest and easiest way to parallelize sequential code (as long as the code is structured in a particular way)
* pthread_t is thread metadata/a thread handle
* pthread_create takes a pthread_t, options, a function pointer, and arguments to the function
* pthread_join waits for a thread to finish, and then places the value at a pointer to an instance of the return type
* A data race occurs when two threads access the same memory location and at least one of them is a write and there is no intervening ordering constraint
* Compiler optimizations assume sequential code
* Torn writes are writes with multiple steps (similar for torn reads)
* volatile tells the compiler to not aggressively optimize code involving an object
	* This doesn't prevent torn writes/torn reads and other issues
* A store is write-atomic if it cannot be torn.
	* On Intel x86-64, byte-aligned writes of 64 bits and smaller are write-atomic
	* ARM has no guarantees
	* Same for reads
* All writes/reads in C++ are non-atomic by default.