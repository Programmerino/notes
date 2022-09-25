* Starvation is when a task is unable to acquire a resource while the rest of the system is making progress. In the dining philosopher's problem, this would be the same as a philosopher's two neighbors constantly eating more food with the adjacent forks to the philosopher before he can acquire either fork.
	* You can get subpar performance, for example, with two parallel counters when the first thread always obtains the lock on the counter such that the second thread never does any work. On the other hand, if one thread is working fast enough such that this happens, it means the code is running pretty quickly and that cache locality is being retained
* Priority inversion is when a high priority task is starved by a lower priority task
* A livelock is a state when multiple tasks continue to execute code, but never make progress
	* A modified dining philosophers problem where they give up if they can't get the right fork after a certain amount of time might have this if everyone picks up their left fork, fails to get a right fork, puts it down, and repeats
	* Due to small inconsistencies in execution time or scheduling, this is usually eventually broken. You can cause it to be broken by changing scheduler parameters across the tasks, or by making some threads sleep a small amount of time
* Reader/writer locks (aka shared mutexes) take advantage of the fact that two reads to the same memory is not a problem
	* We have one writer at a time, but we can have lots of readers at a time as long as no-one is writing
	* pthread use write locks and read locks and shared mutexes use lock (being rw) and lock_shared (being ro)
	* They are often used for maintenance operations, such as resizing hashmaps or vectors, or for garbage collection