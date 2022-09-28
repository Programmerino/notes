* Task queues are often implemented as stacks or deques
	* A simple implementation is with mutexes and pop loops until something is in the queue
		* This can starve the pusher when threads are continually seeking a new task (locking the queue)
* A condition variable is a primitive which efficiently waits for a condition to be true
	* They are always protected by a lock and interacted with under the lock. Together, they form a monitor
	* It has a wait method, a signal method, and a broadcast method. Wait unlocks the lock, waits for a signal or broadcast, and then relocks. Signal notifies one waiter the condition is true, while broadcast notifies all waiters. All the waiting threads then race to acquire the lock (due to the definition of wait). Wait is often put in a while loop which checks the condition and calls wait if the condition is not true. This is important, because wait does not guarantee the condition is true after it returns.