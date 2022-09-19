Left: 1:14 PM
Arrived: 1:26 PM
Started: 1:26 PM

* A barrier is a counter which starts at a certain number (usually the number of threads needed to be synchronized) and provides a wait method which waits for the counter to drop to zero (the counter is then reset)
* A section of code run in parallel and synchronized with a barrier is called a phase
* Forking is expensive since each new thread requires stack space and has overhead. If we have a structure of multiple parallel tasks, it is better to create the threads at the start of execution without killing and spawning them over and over again
	* Barriers provide a method for doing this
* Fork/join parallelism as a term doesn't actually mean using fork and join, but the design pattern (could include using barriers)
* In C++, a thread can be spawned like "thread name(fun, arg)"
* "-lpthread" is cringe, "-pthread" is more based
* Mutexes for pthread are used with...
	* pthread_mutex_t lock1 = PTHREAD_MUTEX_INITIALIZER;
	* pthread_mutex_lock
	* pthread_mutex_unlock
	* pthread_mutex_trylock
	* pthread_mutex_destroy
* Barriers...
	* pthread_barrier_t
	* pthread_barrier_init(ref, NULL, NUM_THREADS)
	* pthread_barrier_wait
	* pthread_barrier_destroy
* For C++...
	* Mutexes...
		* std::mutex lk;
		* lk.lock()
		* lk.try_lock()
		* lk.unlock()
	* Barriers...
		* std::barrier bar(NUM_THREADS)
		* bar.arrive_and_wait();