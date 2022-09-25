* The code executed while holding a lock is called the critical section, which is always ran by only thread at a time
* Mutexes...
	* are provided by std::mutex
	* have non-deterministic thread ordering at runtime
	* Deadlocks occur when all processes are waiting for other processes to take action. They occur when four conditions occur simultaneously...
		* Tasks are claiming exclusive control over resources
		* Tasks already hold mutex resources and are waiting for more
		* Resources cannot be borrowed from tasks until the tasks using them are done
		* A circular chain of tasks exists such that each task holds one or more resources being requested by the next task in the chain