* Linearizability is useful because it can represent a concept of causality. For example, if we have one thread inserting a key into a dictionary and another checking if the key is there, and they are non overlapping, we can achieve some kind of IPC by seeing that the key is now there.
	* It is the strongest definition of safety people use
* Sequential consistency is a slightly more relaxed criteria where operations on the object are consistent with some sequential order that respects per-thread program order, but might not respect real-time order
	* In a linearizable system, if we had two overlapping operations and another operation in the real time order (the true execution of these operations over time), we could say that the two overlapping operations can happen in either order, but that in either case, that one of those two come before the other, and we should expect results consistent with this. With sequential consistency, it is possible that the originally overlapping operation in one thread occurs at a completely different time in that thread which could change behavior:
		* T0: enq(A)
		* T1: enq(B) → enq(C) → deq() → deq() → deq()
		* Linearizable: BAC/ABC
		* Sequential Consistency: BAC/ABC/BCA/BCNull (enq(A) can happen after enq(C), or after the last dequeue)
	* This definition is the same as normal SEQCST with respect to memory if you apply it to stores and loads for atomic variables. For example:
		* T0: M.store(A) → M.store(D)
		* T1: M.store(B) → M.load() → M.load() → M.load()
		* Could result in BBB since it only guarantees that the A and D are ordered together in T0, but doesn't specify any relationship with T1. That being said, DAB is impossible because D always comes after A.
	* A parallel history H is then equivalent to some sequential history S where S contains all H's events, and has the same equivalent sequential object semantics. It is linearizable if it preserves real-time order such that $R_A <_H I_B \Rightarrow I_AR_A <_H I_BR_B$ but is sequentially consistent if $I_A^t <_H I_B^t \Rightarrow I_AR_A <_H I_BR_B$ (preserving program order)
* A benefit to linearizability is that it is composable, meaning that if it is inside another object, the parent remains linearizable, but this is not the case with sequential consistency
	* 