* Program Order/Sequenced-Before refers to the plain meaning of the program where each line (except for control flow, etc.) follows the other, or "semicolon order"
	* Intention of the programmer
	* May be reordered or optimized in some way, but it should always appear like this in sequential execution
* A synchronizes-with edge arises when two threads use a primitive which make their changes visible to each other. For example, if I set two global variables in one thread before a barrier and access them after a barrier in another, there is a synchronizes-with edge which guarantees that the variables will be set in the second thread after the barrier.
	* People will use the term “carrying a dependency” to describe how the state after the primitive in all threads is dependent on previous changes
	* Atomics can be form synchronize-with edges when used with SEQCST
		* A simple example would be a lock based on atomics
		* If you use RELAXED, there are no synchronize-with edges and do not “carry a dependency”. You could not implement a lock with it because the critical section might be moved outside of the locking logic.
* A synchronization variable…
	* Incurs a synchronizes-with relationship, is a variable where threads may conflict, must be protected by the programmer to prevent a data race, and is often an atomic variable. They are also called guard variables
	* Locks count since conceptually they are just TAS locks.
		* In that situation, the atomic would be the synchronization variable, and the data being interacted with in the critical section consists of the data variables.
* A data variable…
	* Is a non-synchronization variable, will create data races if unordered accesses are allowed, and are non-atomics. They are also called guarded variables.
* Happens-before order is sequenced-before, but threaded. It's partial because the order in which lines of code execute across threads can be undefined
* Event order is the order in which loads and stores could be executed on the processor. It's similar to happens-before, except it's more partial since it explicitly models how instructions could be reordered during actual execution.
	* For example, since "x = 1; y = 1" in a critical section can be "y = 1; x = 1", there is no edge between "x = 1" and "y = 1", but the end of the critical section might be dependent on both
	* It should be equivalent to the sequenced-before order in each thread
	* There are four rules to create these edges
		* If A comes before B in the program order, and A or B are SEQCST accesses, then A comes before B in the event order
			* This rule is the key to preventing the critical section from moving out from in-between a lock and unlock
		* All synchronizes-with edges are carried over
		* If there are no other rule applies, and A and B are SEQCST accesses, then an event order can be constructed from either A < B or B < A (partial order)
		* The transitive property applies
	* It demonstrates how SEQCST can be too strong
		* An example might be if we have a normal parallel algorithm, but we also have some other unrelated local variable which is affected by SEQCST, which might be inefficient. If we write `z = 400` after a lock-unlock, it cannot be reordered by the compiler, even if another thread isn't reading it (rule 1).
