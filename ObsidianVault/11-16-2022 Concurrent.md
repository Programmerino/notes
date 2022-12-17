* Treiber Stack
	* Another thread might have deallocated t, so we need a type preserving memory allocator which ensures that the object type at a pointer can never change, and use atomics for this memory allocator so there aren't data races
* Michael & Scott Queue
	* The head always points to a dummy node, and the real head is always the node after the dummy
	* The tail either points to a slightly old “last-in-queue” or the actual last node in the queue
	* To enqueue, update the tail (follow the list from the potentially fake tail until the real end and update the tail pointer)
		* Add new node to the tail with a CAS operation (linearization point)
		* Update the tail if someone didn't already update it
		* To dequeue, take a snapshot of head, tail, dummy, and head again. If both heads are the same, we are confident that all the values were correct (not torn).
			* If the head and tail are the same, return nothing because the queue is empty
			* Get the value of the real head (after dummy), pop off the dummy, and make the real head the dummy
			* Return that value
* Lock-free
	* A good strategy for determining if an algorithm is lock-free is if every iteration in any loops it does is caused by another thread making progress.