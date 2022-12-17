* High performance transactional memory can be achieved with REDO logging and optimistic concurrency control
	* Optimistic concurrency control
		* Transactions might read garbage state, and there is a chance that transactions will be doomed from the start, and we will waste CPU cycles finishing them (in pessimistic concurrency control, this wouldn't happen)
		* TL2 is a method to achieve this:
			* The values we need to read are snapshotted at the start and checked at the end, we lock the areas we are writing to (importantly, we only can know this after we have emulated our changes), and if they are unchanged, we have essentially emulated an atomic write
				* You might deadlock if you don't sort the write locks or use a timeout (more common and more performant)
			* Every transaction under this system has a
				* Read set
				* Write set
					* Works well with REDO logging since the write set is just the redo log
			* Two issues, how do we know if the values we read weren't torn reads across multiple transactions, and how can we figure out if they were unchanged?
				* Give each transaction a start and end time, and every location will have a atomic versioned write-lock associated with it which records the last update time. With this, we can just check if the times were the same.
				* The times are defined at important points, not real time
					* The commit point is after we lock the writes
			* Also works for in-memory databases.
			* Read transactions don't need to use any locks.
	* 