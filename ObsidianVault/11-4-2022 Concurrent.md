* Concurrent data structure correctness is defined in terms of contracts
	* It is composed of safety (bad things won't happen) and liveness (good things will happen)
	* Therefore, a correct concurrent data structure will never give an incorrect result, and will eventually give a correct result
* Liveness can be specified in a variety of ways
* Given when operations start between two threads on a concurrent data structure, linearizability says during the runtime point at which the operation becomes meaningful to other threads (the linearization point), the order between operations (the linearization order) be correct. The idea is to constraint these linearization points such that the order is always correct (the same and correct). All the possible executions are called “histories”. If some object is safe under this metric, it is linearizable.
	* A sufficient condition for this is that for any operation, after its linearization point, subsequent operations (at their linearization points) will see its effects, and before its linearization point, earlier operations (at their linearization points) will not see its effects.
	* An example of a definition of a sequential FIFO queue using this method is:
		* Every dequeue should match an earlier enqueue and returns its value. The dequeue should match the earliest enqueue that has not yet been matched. If no such enqueue exists, dequeue returns NULL
		* This is also an example of object semantics (defines precisely what behavior is allowed and disallowed for a particular object)