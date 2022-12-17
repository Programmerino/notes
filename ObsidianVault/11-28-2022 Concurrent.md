* Transactional memory
	* An alternative concurrent programming model which uses transactions on memory locations rather than locks/barriers/atomics using SGL semantics with better performance
		* Transactions will abort and retry on conflict
	* Are ACID without the durability since it's memory
	* Follows strict serializability most of the time
	* Can be implemented in software or hardware, and they are trying to exploit some property of the transaction such that it is more efficient than an SGL (for example, a bank transfer could use two-phase locking for both accounts)
	* Components
		* Recovery (if we have a conflict or other issue and need to abort, what do we do?)
			* Restart the transaction after rolling back all changes with UNDO or REDO logging
				* UNDO – Log prior values, modify them in place, and on failure, replay the log backwards, or if we succeed, delete the log
				* REDO – Make a copy of values we need to modify, read/update the copies, discard the copies on abort, log the fake modifications we did at the end, and commit the changes. To abort, just stop.
		* Concurrency Control (preventing conflicts)
			* SGL
				* Sometimes necessary because they are transactions which are impossible to abort (showing the user a dialog box, doing I/O etc.)
			* More fine-grained locks
				* Per object, per value, etc.
				* Might be shared
				* Could deadlock.
				* Pessimistic
					* Detect conflicts before they occur.
					* Used when conflicts are frequent
				* Optimistic
					* Detect conflicts at commit.
					* Used when conflicts are rare
	* A transactional system has opacity if all transactions can only read committed state (most systems)
		* Transactions guaranteed to abort should still never see inconsistent state.
		* Reading inconsistent state could cause undefined behavior for other transactions (e.g., an infinite loop)
	* Supported by G++
		* Mark a block as a transaction by wrapping it in `__transaction_atomic {...}`, and that function will only be able to call methods marked with `__attribute__((transaction_safe))`
		* Can be used with `-fgnu-tm`