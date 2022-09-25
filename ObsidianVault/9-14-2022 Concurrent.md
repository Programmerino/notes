* A Single Global Lock (SGL) wraps a single shared state object, but is non-optimal
* Hand-over-hand locking is used for pointer traversal, like in lists or trees where accessors lock and unlock on each node
* Two-phase locking (2PL)
	* Each element in a data structure has a mutex, and multiple writes can be made across them acquiring all the locks you need, making the changes, and then releasing all of them