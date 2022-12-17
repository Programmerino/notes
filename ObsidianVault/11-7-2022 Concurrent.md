* Abstract histories
	* Think of each operation as consisting of an invocation and response, and that a history is a string of these. This can be used to capture the runtime behavior of a single unit test. A correct object will maintain its object semantics across all possible histories (these strings)
	* A concrete history is an extension of this which defines the runtime instructions of a program. This means that in between the invocations and responses of the abstract history, we might have some other stuff going on
		* We actually would really like this to apply
	* Parallel abstract histories extend this by specifying the thread that did the operation
		* This can cause the invocation and response to not be sequentially ordered, and can be split by some operation by another thread (w/o thinking about a concrete history)
		* This is linearizable if it is well-formed (can actually happen) and is equivalent to some sequential history S with all the events from the parallel history, respecting the equivalent sequential object semantics, and preserving the real-time order. This should be defined in terms of some order between the threads (the operations of thread 1 always come before thread 2's when there is an overlap)
* Linearizability can be thought of as a way to extend safety from sequential data structures to concurrent ones.