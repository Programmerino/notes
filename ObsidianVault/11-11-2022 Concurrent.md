* A transaction is an operation across multiple objects that takes effect in a single atomic action
	* For example, moving money from one bank account to another
	* ACID
		* Atomic, consistent, isolated, durable
		* Atomic
			* Transactions should either entirely complete or entirely fail (no tears)
		* Consistent – transactions should preserve system-level consistency requirements and only execute legal behaviors on commit. For example, the total money before and after a bank transfer should not change, and the results of the transfer should be consistent with future operations (no double spending, etc.)
			* This is really an extension of single-object consistency
				* For multi-object consistency...
					* Linearizability becomes strict serializability where transactions form a total sequential order, where the effects occur at some point between invocation and response
						* Example:
							* T1: txn{X.enq(A) -> Y.deg()}
							* T2:                                              txn{Y.enq(B) -> X.deq()}
							* The only possible result is NullA
					* Sequential consistency becomes strong session serializability where transactions form a total sequential order, and this order respects every session's program order (but not necessarily real-time order)
						* Imagine a database connection - we would like operations on the database from this connection to make sense (if I make a table, I should be able to see that table afterwards in the same connection)
						* Example:
							* T1: txn{X.enq(A) -> Y.deg()}
							* T2:                                              txn{Y.enq(B) -> X.deq()}
							* NullA, NullB
					* Serializability means transactions form a total sequential order, and this order respects nothing (not even program order!)
						* Example:
							* T1: txn{Y.enq(A) -> Y.deg()}
							* T2:                                              txn{Y.enq(B) -> Y.deq()} txn{Y.enq(C) -> Y.deq()}
							* There is no ordering, but the transactions still won't be split
							* ABC, ACB, BAC, BCA, CAB, CBA
			* The purposes of criteria...
				* Linearizability is used for concurrent shared memory objects
				* Sequential consistency is used for C++ atomics
				* Strict serializability is used for DRAM-based transactions
				* Serializability is used for highly consistent databases
				* Release consistency is used by most hardware
				* Causal consistency is used for distributed databases
				* Snapshot isolation is the default of most SQL databases
				* Eventual consistency is used for distributed key-value stores
		* Isolation – specifically no torn reads
		* Durability - should survive power outages, etc. which are considered reasonable risks. Not always necessary (for example, shared memory)
	* The are fallible. If a transaction succeeds, it committed, if it failed, it aborted (took no effect).